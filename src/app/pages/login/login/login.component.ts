import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/pages/usuario/shared/usuario';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../../usuario/shared/usuario.service';
import { finalize } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface errorApi {
  error: {
    errors: string[]
  }
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private usuario: Usuario = Usuario as {};
  public loading = false;
  public errorMessage: string[] = [];
  public btnSolicitarAtivacao = false;
  public successMessage: string[] = [];
  public formLogin: FormGroup;
  constructor(private authService: AuthService, private usuarioService: UsuarioService,
              private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildFormLogin();
  }

  private buildFormLogin() {
    this.formLogin = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(6)]]
    });
  }



  close(error: string) {
    this.errorMessage.splice(this.errorMessage.indexOf(error), 1);
  }

  onSubmit() {
    this.setOpcoesDefault();
    this.usuario = this.formLogin.value;
    this.authService.logar(this.usuario).subscribe(
      () => {
        this.loading = false;
        this.router.navigate(['/lancamento']);
      },
      (data: errorApi) => {
        this.loading = false;
        let error = data.error.errors[0];
        if (error === 'Usuário está desativado!') {
          this.btnSolicitarAtivacao = true;
        }
        if (error == null) {
          error = 'Erro durante o acesso ao servidor!';
        }
        this.errorMessage.push(error);
      }
    );

  }

  private setOpcoesDefault() {
    this.btnSolicitarAtivacao = false;
    this.loading = true;
    this.errorMessage = [];
    this.successMessage = [];
  }

  solicitarEmail() {
    this.setOpcoesDefault();
    this.usuarioService.solicitarAtivacao(this.usuario.email).pipe(
      finalize(() => {
        this.loading = false;
      })
    )
      .subscribe(
        () => {
          this.successMessage.push('Solicitação enviada com sucesso! Verfique sua caixa de e-mail.');
        },
        (erro: any) => {
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
}
