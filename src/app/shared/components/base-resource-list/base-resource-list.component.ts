import { OnInit, OnDestroy } from '@angular/core';
import { BaseResourceService } from '../../services/base-resource.service';
import { BaseResourceModel } from '../../models/base-resource-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { ToastService } from '../../services/toast.service';


export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit, OnDestroy {

  public search: string = null;
  protected loading = false;
  protected page = 1;
  protected size = 5;
  protected collectionSize = 0;
  protected titleModal: string;
  protected messageModal: string;
  resources: T[] = [];
  modelChanged: Subject<string> = new Subject<string>();
  constructor(private resourceService: BaseResourceService<T>, private modalService: NgbModal, protected toastService: ToastService) {
    this.modelChanged.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe(() => this.getAll())

  }

  changed(text: string) {
    this.modelChanged.next(text);
  }

  ngOnInit() {
    this.getAll();
  }

  protected getAll() {
    this.loading = true;
    this.resourceService.getAll(this.page, this.size, this.search).subscribe(
      entries => {
        this.resources = entries.content;
        this.collectionSize = entries.totalElements;
        this.loading = false;
      },
      error => {
        this.toastService.show('Erro ao tentar carregar a lista, tente mais tarde!', { classname: 'bg-danger text-light', delay: 3000 });
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
        this.toastService.show('Operação realizada com sucesso!', { classname: 'bg-success text-light', delay: 3000 });
      },
      (error) => {
        this.toastService.show('Erro ao tentar efetuar a operação, por favor tente mais tarde!', { classname: 'bg-danger text-light', delay: 3000 });
      }
    );
  }

  ngOnDestroy() {
    this.toastService.toasts.forEach(x => {
      this.toastService.remove(x);
    });
  }
}
