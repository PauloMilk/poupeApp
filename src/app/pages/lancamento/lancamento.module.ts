import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentoRoutingModule } from './lancamento-routing.module';
import { LancamentoListComponent } from './lancamento-list/lancamento-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LancamentoFormComponent } from './lancamento-form/lancamento-form.component';
import {IMaskModule} from 'angular-imask';

@NgModule({
  declarations: [LancamentoListComponent, LancamentoFormComponent],
  imports: [
    LancamentoRoutingModule,
    SharedModule,
    IMaskModule
  ]
})
export class LancamentoModule { }
