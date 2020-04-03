import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DadosContaComponent } from './dados-conta/dados-conta.component';
import { ConfirmacaoCadastroComponent } from './confirmacao-cadastro/confirmacao-cadastro.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { NoAuthGuard } from 'src/app/core/guards/no-auth.guard';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { EditarSenhaComponent } from './editar-senha/editar-senha.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';


const routes: Routes = [
  { path: 'meusDados', component: DadosContaComponent, canActivate: [AuthGuard] },
  { path: 'meusDados/editarSenha', component: EditarSenhaComponent, canActivate: [AuthGuard] },
  { path: 'novo', component: CadastroUsuarioComponent,  canActivate: [NoAuthGuard] },
  { path: 'confirmar/:codigo', component: ConfirmacaoCadastroComponent, canActivate: [NoAuthGuard] },
  { path: 'esqueceuSenha', component: EsqueceuSenhaComponent,  canActivate: [NoAuthGuard] },
  { path: 'recuperar/senha/:codigo/:email', component: RecuperarSenhaComponent, canActivate: [NoAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
