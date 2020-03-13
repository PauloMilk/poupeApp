import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-page/login.component';
import { NoAuthGuard } from 'src/app/core/guards/no-auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [NoAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
