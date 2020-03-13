import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DadosContaComponent } from './dados-conta/dados-conta.component';
import { ConfirmacaoCadastroComponent } from './confirmacao-cadastro/confirmacao-cadastro.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { NoAuthGuard } from 'src/app/core/guards/no-auth.guard';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';


const routes: Routes = [
  { path: 'meusDados', component: DadosContaComponent, canActivate: [AuthGuard] },
  { path: 'cadastro', component: CadastroComponent,  canActivate: [NoAuthGuard] },
  { path: 'confirmar/:codigo', component: ConfirmacaoCadastroComponent, canActivate: [NoAuthGuard] },
  { path: 'esqueceuSenha', component: EsqueceuSenhaComponent,  canActivate: [NoAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
