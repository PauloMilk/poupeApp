import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/pages/usuario/shared/usuario';
import { UsuarioService } from '../../usuario/shared/usuario.service';
import { finalize } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  private usuario: Usuario = {} as Usuario;
  public errorMessage: string[] = [];
  public successMessage: string[] = [];
  public loading = false;
  public formUsuario: FormGroup;
  constructor(
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildFormUsuario();
  }


  private buildFormUsuario() {
    this.formUsuario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(6)]],
      confirmeSenha: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.usuario = this.formUsuario.value;
    if (this.testarSenhas()) {
      this.loading = true;
      this.errorMessage = [];
      this.successMessage = [];
      this.usuarioService.create(this.usuario)
        .pipe(
          finalize(() => {
            this.loading = false;
          })
        ).
        subscribe(
          () => {
            this.usuario = {} as Usuario;
            this.formUsuario.reset();
            this.successMessage.push('Usuário cadastrado com sucesso! Confirme o cadastro em seu email.');
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
    if (this.usuario.senha !== this.usuario.confirmeSenha) {
      this.errorMessage = ['As senhas não conferem!'];
      return false;
    }
    return true;
  }
}
