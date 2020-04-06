import { OnInit, OnDestroy } from '@angular/core';
import { BaseResourceService } from '../../services/base-resource.service';
import { BaseResourceModel } from '../../models/base-resource-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

  public search: string = null;
  public loading = false;
  public page = 1;
  public size = 5;
  public collectionSize = 0;
  public titleModal: string;
  public messageModal: string;
  serverErrorMessages: string[] = null;
  resources: T[] = [];
  modelChanged: Subject<string> = new Subject<string>();
  constructor(private resourceService: BaseResourceService<T>, private modalService: NgbModal, protected toastService: ToastrService) {
    this.modelChanged.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe(() => this.getAll());

  }

  changed(text: string) {
    this.modelChanged.next(text);
  }

  ngOnInit() {
    this.getAll();
  }

  public getAll() {
    this.loading = true;
    this.resourceService.getAll(this.page, this.size, this.search).subscribe(
      entries => {
        this.resources = entries.content;
        this.collectionSize = entries.totalElements;
        this.loading = false;
      },
      error => {
        this.actionsForError(error);
      }
    );
  }

  protected abstract setTitleAndMessageModal(resource): void;
  deleteResource(resource) {

    const modalRef = this.modalService.open(ModalConfirmComponent, {
      windowClass: 'light-blue-backdrop',
      centered: true
    });
    this.setTitleAndMessageModal(resource);
    modalRef.componentInstance.message = this.messageModal;
    modalRef.componentInstance.title = this.titleModal;

    modalRef.result.then(
      (result) => {
        if (result) {
          this.delete(resource);
        }
      }
    );

  }
  private delete(resource: T) {
    this.resourceService.delete(resource.id).subscribe(
      () => {
        this.resources = this.resources.filter(element => element !== resource);
        if (this.resources.length === 0) {
          this.page--;
          this.getAll();
        }
        this.toastService.success('Operação realizada com sucesso!', null, {
          progressBar: true, closeButton: true, positionClass: 'toast-bottom-right'
        });
      },
      (error) => {
        this.actionsForError(error);
      }
    );
  }

  // ngOnDestroy() {
  //   this.toastService.toasts.forEach(x => {
  //     this.toastService.remove(x.toastId);
  //   });
  // }


  private actionsForError(error) {
    const erroMessage = error.error[0].mensagemUsuario != null
      ? error.error[0].mensagemUsuario
      : 'Ocorreu um erro ao processar a sua solicitação!';
    this.toastService.error(erroMessage, null, {
      progressBar: true, closeButton: true, positionClass: 'toast-bottom-right'
    });

    if (error.status === 422) {
      this.serverErrorMessages = JSON.parse(error._body).errors;
    } else {
      this.serverErrorMessages.push('Falha na comunicação com o servidor, Por favor, tente mais tarde.');
    }

  }
}
