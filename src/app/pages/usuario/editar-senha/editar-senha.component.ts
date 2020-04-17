import { Component, Injector } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Usuario } from '../shared/usuario';
import { UsuarioService } from '../shared/usuario.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-senha',
  templateUrl: './editar-senha.component.html',
  styleUrls: ['./editar-senha.component.css']
})
export class EditarSenhaComponent extends BaseResourceFormComponent<Usuario> {

  public errorMessage: string[] = [];
  public errorSenhas = false;

  constructor(protected injector: Injector, protected service: UsuarioService, protected toastService: ToastrService, private modalService: NgbModal) {
    super(injector, new Usuario(), service, Usuario.fromJson, toastService);
  }
  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      senha: [null, [Validators.required, Validators.minLength(6)]],
      novaSenha: [null, [Validators.required, Validators.minLength(6)]],
      confirmeSenha: [null, [Validators.required, Validators.minLength(6)]]
    });
  }


  ngOnInit() {
    this.buildResourceForm();
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  close(error: string) {
    this.errorMessage.splice(this.errorMessage.indexOf(error), 1);
  }


  submitForm() {
    const resource: Usuario = this.jsonDataToResourceFn(this.resourceForm.value);
    if (resource.novaSenha === resource.confirmeSenha) {
      this.submittingForm = true;
      this.updateUsuario(resource);
    } else {
      this.errorSenhas = true;
      this.errorMessage.push('Senha incoerentes!');
    }

  }

  validarSenhas(content) {
    this.errorMessage = [];
    this.errorSenhas = false;
    const resource: Usuario = this.jsonDataToResourceFn(this.resourceForm.value);
    if (resource.novaSenha === resource.confirmeSenha) {
      this.open(content);
    } else {
      this.errorSenhas = true;
      this.errorMessage.push('Senha incoerentes!');
    }
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
          this.toastService.success('Operação realizada com sucesso!', null, {
            progressBar: true, closeButton: true, positionClass: 'toast-bottom-right'
          });
        },
        error => {
          error.error.errors.forEach(element => {
            this.errorMessage.push(element);
          });
          const erroMessage = error.error.errors[0] != null
            ? error.error.errors[0]
            : 'Ocorreu um erro ao processar a sua solicitação!';
          this.toastService.error(erroMessage, null, {
            progressBar: true, closeButton: true, positionClass: 'toast-bottom-right'
          });
        }
      );
  }
}
