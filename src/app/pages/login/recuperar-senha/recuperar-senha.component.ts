import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../usuario/shared/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Usuario } from '../../usuario/shared/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css']
})
export class RecuperarSenhaComponent implements OnInit {
  public loading = false;
  private usuario: Usuario = Usuario as {};
  public errorMessage: string[] = null;
  public successMessage: string[] = [];
  public formSenha: FormGroup;
  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildFormSenha();
    this.route.paramMap.subscribe(params => {
      this.usuario.codigo = params.get('codigo');
      this.usuario.email = params.get('email');
    });
  }

  private buildFormSenha() {
    this.formSenha = this.formBuilder.group({
      senha: [null, [Validators.required, Validators.minLength(6)]],
      confirmeSenha: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  ativarConta() {
    this.loading = true;
    this.successMessage = [];
    this.errorMessage = [];
    if (this.verificarSenha()) {
      this.usuarioService.recuperarSenha(this.usuario).pipe(
        finalize(() => {
          this.loading = false;
          this.formSenha.reset();
        }),
      )
        .subscribe(
          () => {
            this.successMessage .push('Senha recuperada com sucesso! Em instantes você será redirecionado para o login.');
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 3000);
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
  }

  private verificarSenha() {
    this.usuario.senha = this.formSenha.value.senha;
    this.usuario.confirmeSenha = this.formSenha.value.confirmeSenha;
    if (this.usuario.senha === this.usuario.confirmeSenha) {
      return true;
    } else {
      this.loading = false;
      this.errorMessage.push('As senhas não conferem!')
      return false;
    }

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
