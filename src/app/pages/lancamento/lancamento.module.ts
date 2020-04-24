import { NgModule } from '@angular/core';

import { LancamentoRoutingModule } from './lancamento-routing.module';
import { LancamentoListComponent } from './lancamento-list/lancamento-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LancamentoFormComponent } from './lancamento-form/lancamento-form.component';
import {IMaskModule} from 'angular-imask';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [LancamentoListComponent, LancamentoFormComponent],
  imports: [
    LancamentoRoutingModule,
    SharedModule,
    IMaskModule
  ]
})
export class LancamentoModule { }
