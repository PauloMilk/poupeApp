import { Component, OnInit, Injector } from '@angular/core';
import { Usuario } from 'src/app/pages/usuario/shared/usuario';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../shared/usuario.service';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { ToastService } from 'src/app/shared/services/toast.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dados-conta',
  templateUrl: './dados-conta.component.html',
  styleUrls: ['./dados-conta.component.css']
})
export class DadosContaComponent extends BaseResourceFormComponent<Usuario> {
  // usuario: Usuario = <Usuario>{};
  // formDados: FormGroup;
  public errorMessage: string[] = null;

  constructor(protected injector: Injector, protected service: UsuarioService, protected toastService: ToastService, private modalService: NgbModal) {
    super(injector, new Usuario(), service, Usuario.fromJson, toastService);
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      username: [null],
      password: [null, [Validators.required]],
      novaSenha: [null, [Validators.minLength(3)]],
      confirmSenha: [null, [Validators.minLength(3)]]
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
          this.resourceForm.patchValue(resource); //binds loaded resource data to resourceForm
        },
        (error) => {
          this.toastService.show('Ocorreu um erro no servidor, tente mais tarde.', { classname: 'bg-danger text-light', delay: 10000 });
          // this.goBackPage();
        }
      );
  }

  submitForm() {
    console.log("teste")
    this.submittingForm = true;
    this.validarFormulario();
  }

  private validarFormulario() {
    const resource: Usuario = this.jsonDataToResourceFn(this.resourceForm.value);
    if (resource.senhaConfirm != null && resource.novaSenha != null) {
      if (resource.novaSenha !== resource.senhaConfirm) {
        this.errorMessage.push('Senha informadas incoerentes.');
      }
    } else {
      resource.novaSenha = null;
      resource.senhaConfirm = null;
    }
    if (this.errorMessage === null || this.errorMessage.length === 0) {
      this.updateUsuario(resource);
    }
  }

  private updateUsuario(resource: Usuario) {
    this.service.atualizarDados(resource)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }

  // // constructor(private usuarioService: UsuarioService, private modalService: NgbModal, private formBuilder: FormBuilder) {
  // //   this.buildForm();
  // // }

  // ngOnInit() {
  //   this.usuarioService.getDadosUsuario().subscribe(
  //     (data: Usuario) => {
  //       this.usuario = data;
  //       this.formDados.get('nome').setValue(this.usuario.nome);
  //     }
  //   )
  // }

  // buildForm() {
  //   this.formDados = this.formBuilder.group({
  //   nome: [null, [Validators.required, Validators.minLength(3)]],
  //   password: [null, [Validators.required]],
  //   novaSenha: [null, [Validators.minLength(3)]],
  //   confirmSenha: [null, [Validators.minLength(3)]]
  // });
  // }

  // onSubmit() {
  //   const dados = this.formDados.value;
  //   if (dados.novaSenha !== dados.confirmSenha) {
  //     this.errorMessage = ['As senhas novas informadas não conferem.'];
  //     console.log("teste");
  //   } else {
  //     console.log("enviado..")
  //   }
  // }

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

}
