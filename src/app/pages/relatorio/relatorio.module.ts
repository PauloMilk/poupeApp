import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatorioRoutingModule } from './relatorio-routing.module';
import { RelatorioMensalComponent } from './relatorio-mensal/relatorio-mensal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [RelatorioMensalComponent],
  imports: [
    CommonModule,
    RelatorioRoutingModule,
    SharedModule,
    ChartModule
  ]
})
export class RelatorioModule { }
