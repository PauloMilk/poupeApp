import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/pages/usuario/shared/usuario';
import { UsuarioService } from '../shared/usuario.service';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
  public usuario: Usuario = {} as Usuario;
  public errorMessage: string[] = [];
  public successMessage: string[] = [];
  public loading = false;
  constructor(
    private usuarioService: UsuarioService
  ) { }

  onSubmit() {
    if (this.testarSenhas()) {
      this.loading = true;
      this.errorMessage = [];
      this.successMessage = [];
      this.usuarioService.create({ nome: this.usuario.nome, email: this.usuario.email, senha: this.usuario.novaSenha })
        .pipe(
          finalize(() => {
            this.loading = false;
          })
        ).
        subscribe(
          () => {
            this.usuario = {} as Usuario;
            this.successMessage = ['Usuário cadastrado com sucesso! Confirme o cadastro em seu email.'];
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

  close(error: string) {
    if (this.errorMessage != null && this.errorMessage.length > 0) {
      this.errorMessage.splice(this.errorMessage.indexOf(error), 1);
    }
    if (this.successMessage != null && this.successMessage.length > 0) {
      this.successMessage.splice(this.successMessage.indexOf(error), 1);
    }


  }

  private testarSenhas() {
    if (this.usuario.novaSenha !== this.usuario.confirmeSenha) {
      this.errorMessage = ['As senhas não conferem!'];
      return false;
    }
    return true;
  }
}
