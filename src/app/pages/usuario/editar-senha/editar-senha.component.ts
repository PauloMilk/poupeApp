import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Usuario } from '../shared/usuario';
import { ToastService } from 'src/app/shared/services/toast.service';
import { UsuarioService } from '../shared/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Validators } from '@angular/forms';
import { tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-editar-senha',
  templateUrl: './editar-senha.component.html',
  styleUrls: ['./editar-senha.component.css']
})
export class EditarSenhaComponent extends BaseResourceFormComponent<Usuario> {

  public errorMessage: string[] = null;

  constructor(protected injector: Injector, protected service: UsuarioService, protected toastService: ToastService, private modalService: NgbModal) {
    super(injector, new Usuario(), service, Usuario.fromJson, toastService);
  }
  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      senha: [null, [Validators.required]],
      novaSenha: [null, [Validators.minLength(3)]],
      confirmeSenha: [null, [Validators.minLength(3)]]
    });
  }


  ngOnInit() {
    this.buildResourceForm();
  }

 open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  close(error: string) {
    this.errorMessage.splice(this.errorMessage.indexOf(error), 1);
  }


  submitForm() {
    this.submittingForm = true;
    const resource: Usuario = this.jsonDataToResourceFn(this.resourceForm.value);
    this.updateUsuario(resource);
  }

  private updateUsuario(resource: Usuario) {
    this.service.atualizarSenha(resource).pipe(
      finalize(() => {
        this.submittingForm = false;
        this.modalService.dismissAll();
        this.resourceForm.reset();
      })
    )
      .subscribe(
        data => {
          this.toastService.show('Operação realizada com sucesso!', { classname: 'bg-success text-light', delay: 3000 });
        },
        error => {
          this.toastService.show('Ocorreu um erro no servidor, tente mais tarde.', { classname: 'bg-danger text-light', delay: 10000 });
        }
      );
  }
}
