import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { EditarNomeComponent } from './editar-nome/editar-nome.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditarSenhaComponent } from './editar-senha/editar-senha.component';


@NgModule({
  declarations: [
    EditarNomeComponent,
    EditarSenhaComponent ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
  ]
})
export class UsuarioModule { }
