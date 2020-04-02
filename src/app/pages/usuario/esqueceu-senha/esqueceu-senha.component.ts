import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/usuario';
import { UsuarioService } from '../shared/usuario.service';
import { finalize } from 'rxjs/operators';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.css']
})
export class EsqueceuSenhaComponent implements OnInit {
  public loading = false;
  public usuario: Usuario = Usuario as {};
  public errorMessage: string[] = [];
  public successMessage: string[] = [];
  public formEmail: FormGroup;
  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildFormEmail();
  }

  private buildFormEmail() {
    this.formEmail = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    this.setOpcoesDefault();
    this.usuario = this.formEmail.value;
    this.usuarioService.solicitarRecuperacaoSenha(this.usuario.email).pipe(
      finalize(() => {
        this.loading = false;
      }),
    )
      .subscribe(
        () => {
          this.usuario = Usuario as {};
          this.formEmail.reset();
          this.successMessage.push('Solicitação enviada com sucesso! Verifique seu e-mail.');
        },
        (erro) => {
          if (erro.status === 0) {
            this.errorMessage.push('Erro durante a conexao com o servidor.');
          } else {
            erro.error.forEach(element => {
              this.errorMessage.push(element.mensagemUsuario);
            });
          }
        }
    );

  }

  private setOpcoesDefault() {
    this.loading = true;
    this.errorMessage = [];
    this.successMessage = [];
  }

  close(error: string) {
    if (this.errorMessage != null && this.errorMessage.length > 0) {
      this.errorMessage.splice(this.errorMessage.indexOf(error), 1);
    }
    if (this.successMessage != null && this.successMessage.length > 0) {
      this.successMessage.splice(this.successMessage.indexOf(error), 1);
    }


  }
}
