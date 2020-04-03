import { Component, OnInit, Injector } from '@angular/core';
import { Usuario } from 'src/app/pages/usuario/shared/usuario';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../shared/usuario.service';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { ToastService } from 'src/app/shared/services/toast.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-editar-nome',
  templateUrl: './editar-nome.component.html',
  styleUrls: ['./editar-nome.component.css']
})
export class EditarNomeComponent extends BaseResourceFormComponent<Usuario> {
  // usuario: Usuario = <Usuario>{};
  // formDados: FormGroup;
  public errorMessage: string[] = null;

  constructor(protected injector: Injector, protected service: UsuarioService, protected toastService: ToastService) {
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
          this.toastService.show('Ocorreu um erro no servidor, tente mais tarde.', { classname: 'bg-danger text-light', delay: 10000 });
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
          this.toastService.show('Operação realizada com sucesso!', { classname: 'bg-success text-light', delay: 3000 });
        },
        error => {
          this.toastService.show('Ocorreu um erro no servidor, tente mais tarde.', { classname: 'bg-danger text-light', delay: 10000 });
        }
      );
  }


}
