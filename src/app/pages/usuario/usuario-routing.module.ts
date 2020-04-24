import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarNomeComponent } from './editar-nome/editar-nome.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { EditarSenhaComponent } from './editar-senha/editar-senha.component';


const routes: Routes = [
  { path: 'meusDados', component: EditarNomeComponent, canActivate: [AuthGuard] },
  { path: 'meusDados/editarSenha', component: EditarSenhaComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
