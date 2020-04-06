import { Component, OnInit, Injector } from '@angular/core';
import { Usuario } from 'src/app/pages/usuario/shared/usuario';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../shared/usuario.service';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { switchMap, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-nome',
  templateUrl: './editar-nome.component.html',
  styleUrls: ['./editar-nome.component.css']
})
export class EditarNomeComponent extends BaseResourceFormComponent<Usuario> {
  public errorMessage: string[] = null;

  constructor(protected injector: Injector, protected service: UsuarioService, protected toastService: ToastrService) {
    super(injector, new Usuario(), service, Usuario.fromJson, toastService);
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.pattern('[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$')]],
      email: [null]
    });
  }

  protected loadResource() {
    this.route.paramMap.pipe(
      switchMap(params => this.service.getDadosUsuario())
    )
      .subscribe(
        (resource) => {
          this.resource = resource;
          this.editorResourceAttributes();
          this.resourceForm.patchValue(resource);
        },
        (error) => {
          this.toastService.error('Ocorreu um erro no servidor, tente mais tarde.', null, {
            progressBar: true, closeButton: true, positionClass: 'toast-bottom-right'
          });
        }
      );
  }

  submitForm() {
    this.submittingForm = true;
    const resource: Usuario = this.jsonDataToResourceFn(this.resourceForm.value);
    this.updateUsuario(resource);
  }

  private updateUsuario(resource: Usuario) {
    this.service.atualizarNome(resource).pipe(
      tap(() => {
        this.submittingForm = false;
      })
    )
      .subscribe(
        data => {
          this.toastService.success('Operação realizada com sucesso!', null, {
            progressBar: true, closeButton: true, positionClass: 'toast-bottom-right'
          });
        },
        error => {
          const erroMessage = error.error[0].mensagemUsuario != null
            ? error.error[0].mensagemUsuario
            : 'Ocorreu um erro ao processar a sua solicitação!';
          this.toastService.error(erroMessage, null, {
            progressBar: true, closeButton: true, positionClass: 'toast-bottom-right'
          });
        }
      );
  }


}
