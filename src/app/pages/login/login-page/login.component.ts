import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/pages/usuario/shared/usuario';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuario: Usuario = <Usuario>{};
  public loading: boolean = false;
  public errorMessage: string[] = null;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  close(error: string) {
    this.errorMessage.splice(this.errorMessage.indexOf(error), 1);
  }

  onSubmit() {
    this.loading = true;
    this.errorMessage = null;
    this.authService.logar(this.usuario).subscribe(
      () => {
        this.loading = false;
        this.router.navigate(['/dashboard']);
      },
      (erro: any) => {
        this.loading = false;
        const error = erro.error.error_description === 'Usuário inexistente ou senha inválida'
          ? 'Usuário e/ou senha inválidos!' : erro.error.error_description;

        this.errorMessage = [error];
      }
    );

  }

}
