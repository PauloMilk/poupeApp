import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoAuthGuard } from 'src/app/core/guards/no-auth.guard';
import { ConfirmacaoCadastroComponent } from './confirmacao-cadastro/confirmacao-cadastro.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { LoginComponent } from './login/login.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
  { path: 'confirmacao/:codigo', component: ConfirmacaoCadastroComponent, canActivate: [NoAuthGuard] },
  { path: 'esqueceuSenha', component: EsqueceuSenhaComponent,  canActivate: [NoAuthGuard] },
  { path: 'recuperacaoDeSenha/:codigo/:email', component: RecuperarSenhaComponent, canActivate: [NoAuthGuard] },
  { path: 'cadastrarSe', component: CadastroUsuarioComponent,  canActivate: [NoAuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
