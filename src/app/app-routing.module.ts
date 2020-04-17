import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/lancamento', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule', canActivate: [NoAuthGuard] },
  // { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard]},
  { path: 'categoria', loadChildren: './pages/categoria/categoria.module#CategoriaModule', canActivate: [AuthGuard]},
  { path: 'lancamento', loadChildren: './pages/lancamento/lancamento.module#LancamentoModule', canActivate: [AuthGuard]},
  { path: 'relatorio', loadChildren: './pages/relatorio/relatorio.module#RelatorioModule', canActivate: [AuthGuard]},
  { path: 'usuario', loadChildren: './pages/usuario/usuario.module#UsuarioModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
