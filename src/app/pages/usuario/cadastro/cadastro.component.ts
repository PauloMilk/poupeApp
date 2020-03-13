import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/pages/usuario/shared/usuario';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  public usuario: Usuario = <Usuario>{};
  public errorMessage: string[] = null;
  public loading: boolean = false;
  public successMessage: string[] = null;
  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
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
    if (this.usuario.password !== this.usuario.senhaConfirm) {
      this.errorMessage = ['As senhas não conferem!'];
      return false;
    }
    return true;
  }

  onSubmit() {
    if (this.testarSenhas()) {
      this.loading = true;
      this.errorMessage = null;
      this.successMessage = null;
      this.usuarioService.create(this.usuario).subscribe(
        () => {
          this.loading = false;
          this.errorMessage = null;
          this.usuario = <Usuario>{};
          this.successMessage = ['Usuário cadastrado com sucesso! Confirme o cadastro em seu email.'];
        },
        (erro: any) => {
          this.loading = false;
          this.errorMessage = erro.error.errors;
        }
      );
    }
  }

}
