import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-confirmacao-cadastro',
  templateUrl: './confirmacao-cadastro.component.html',
  styleUrls: ['./confirmacao-cadastro.component.css']
})
export class ConfirmacaoCadastroComponent implements OnInit {
  loading: boolean = false;
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
      switchMap(params => this.usuarioService.ativarConta(params.get('codigo')))
    )
      .subscribe(
        () => {
          this.loading = false;
          this.successMessage = ['Conta ativada com sucesso! Em instantes você será redirecionado para o login.'];
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 3000);
        },
        (erro) => {
          this.loading = false;
          this.successMessage = null;
          this.errorMessage = erro.error.errors;
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
