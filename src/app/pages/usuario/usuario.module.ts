import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { DadosContaComponent } from './dados-conta/dados-conta.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConfirmacaoCadastroComponent } from './confirmacao-cadastro/confirmacao-cadastro.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [DadosContaComponent, CadastroComponent, ConfirmacaoCadastroComponent, EsqueceuSenhaComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
  ]
})
export class UsuarioModule { }
