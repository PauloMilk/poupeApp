import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, finalize } from 'rxjs/operators';
import { Usuario } from '../shared/usuario';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css']
})
export class RecuperarSenhaComponent implements OnInit {
  public loading = false;
  public usuario: Usuario = Usuario as  {};
  public errorMessage: string[] = null;
  public successMessage: string[] = [];
  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ativarConta() {
    this.loading = true;
    this.successMessage = [];
    this.errorMessage = [];
    this.route.paramMap.pipe(
      switchMap(params => this.usuarioService.recuperarSenha(params.get('codigo'))),
      finalize(() => {
        this.loading = false;
      }),
    )
      .subscribe(
        () => {
          this.successMessage = ['Conta ativada com sucesso! Em instantes você será redirecionado para o login.'];
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

  close(error: string) {
    if (this.errorMessage != null && this.errorMessage.length > 0) {
      this.errorMessage.splice(this.errorMessage.indexOf(error), 1);
    }
    if (this.successMessage != null && this.successMessage.length > 0) {
      this.successMessage.splice(this.successMessage.indexOf(error), 1);
    }


  }

}
