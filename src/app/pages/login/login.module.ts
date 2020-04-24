import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmacaoCadastroComponent } from './confirmacao-cadastro/confirmacao-cadastro.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { LoginComponent } from './login/login.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

@NgModule({
  declarations: [LoginComponent, ConfirmacaoCadastroComponent, EsqueceuSenhaComponent, RecuperarSenhaComponent, CadastroUsuarioComponent],
  imports: [
    SharedModule,
    LoginRoutingModule,
    FormsModule,
    NgbAlertModule
  ]
})
export class LoginModule { }
