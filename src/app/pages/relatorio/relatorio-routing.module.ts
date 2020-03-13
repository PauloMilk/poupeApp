import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelatorioMensalComponent } from './relatorio-mensal/relatorio-mensal.component';


const routes: Routes = [
  { path: '', component: RelatorioMensalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatorioRoutingModule { }
