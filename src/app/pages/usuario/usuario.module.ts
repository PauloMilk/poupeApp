import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { EditarNomeComponent } from './editar-nome/editar-nome.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ConfirmacaoCadastroComponent } from './confirmacao-cadastro/confirmacao-cadastro.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { EditarSenhaComponent } from './editar-senha/editar-senha.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';


@NgModule({
  declarations: [
    EditarNomeComponent,
    CadastroUsuarioComponent,
    ConfirmacaoCadastroComponent, EsqueceuSenhaComponent, EditarSenhaComponent, RecuperarSenhaComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
  ]
})
export class UsuarioModule { }
