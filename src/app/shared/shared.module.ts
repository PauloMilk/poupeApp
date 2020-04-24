import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbDropdownModule, NgbPaginationModule, NgbAlertModule, NgbModalModule, NgbDatepickerModule, NgbTooltipModule, NgbTypeaheadModule, NgbToastModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
@NgModule({
  declarations: [NavbarComponent, PageTitleComponent, ModalConfirmComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    NgbPaginationModule,
    FormsModule,
    NgbAlertModule,
    NgbModalModule,
    NgbDatepickerModule,
    CurrencyMaskModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    NgbTypeaheadModule,
    NgbToastModule,
    NgbCollapseModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    NgbDropdownModule,
    PageTitleComponent,
    NgbPaginationModule,
    FormsModule,
    NgbAlertModule,
    NgbModalModule,
    NgbDatepickerModule,
    CurrencyMaskModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    NgbTypeaheadModule,
    NgbToastModule,
    NgbCollapseModule
  ],
  entryComponents: [
    ModalConfirmComponent
  ]
})
export class SharedModule { }
