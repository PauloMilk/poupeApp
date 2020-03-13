import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lancamento } from 'src/app/pages/lancamento/shared/lancamento';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { catchError, map } from 'rxjs/operators';
import { Page } from 'src/app/interfaces/page';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService extends BaseResourceService<Lancamento> {

  constructor(protected injector: Injector) {
    super(environment.urlAPI + '/lancamentos', injector, Lancamento.fromJson);
  }

  getAll(page: number, size: number, filter: string): Observable<Page<Lancamento>> {
    page--;
    let url;
    if (filter !== null) {
      url = `${environment.urlAPI}/lancamentos?page=${page}&size=${size}&nome=${filter}&descricao=${filter}&categoria=${filter}&sort=data,DESC`;
    } else {
      url = `${environment.urlAPI}/lancamentos?page=${page}&size=${size}&sort=data,DESC`;
    }
    return this.http.get(url).pipe(
      map(Page.fromJson.bind(this)),
      catchError(this.handleError)
    );
  }

  // getAll(page: number, size: number, filtro): Observable<any> {
  //   let url;
  //   if  (filtro !== '') {
  //     url = `${environment.urlAPI}/lancamentos?page=${page - 1}&size=${size}&nome=${filtro}&descricao=${filtro}&categoria=${filtro}`;
  //   } else {
  //     url = `${environment.urlAPI}/lancamentos?page=${page - 1}&size=${size}`;
  //   }
  //   return this.http.get(url);
  // }

  // deleteById(id: number): Observable<any> {
  //   const url = `${environment.urlAPI}/lancamentos/${id}`;
  //   return this.http.delete(url);
  // }

  // save(lancamento: Lancamento) {
  //   const url = `${environment.urlAPI}/lancamentos`;
  //   return this.http.post(url, lancamento);
  // }

  // updateById(lancamento: Lancamento): Observable<any> {
  //   const url = `${environment.urlAPI}/lancamentos/${lancamento.id}`;
  //   return this.http.put(url, lancamento);
  // }

  // getById(id: number) {
  //   const url = `${environment.urlAPI}/lancamentos/${id}`;
  //   return this.http.get(url);
  // }
}
