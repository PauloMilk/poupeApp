import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {CustomDatepickerI18n, NgbDatePTParserFormatter} from './core/config/CustomDatepickerI18n';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule, NgbDatepickerI18n, NgbDateParserFormatter, NgbDateNativeAdapter, NgbDateAdapter} from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenApiService } from './core/interceptors/token-api.service';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { I18n } from './core/config/CustomDatepickerI18n';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

registerLocaleData(ptBr);
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule

  ],
  providers: [
  {
    provide: LOCALE_ID, useValue: 'pt'
  },
  I18n,
  {
    provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n
  },
  {
    provide: NgbDateParserFormatter, useClass: NgbDatePTParserFormatter
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
