import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from 'src/app/pages/categoria/shared/categoria';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Page } from 'src/app/interfaces/page';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends BaseResourceService<Categoria> {

  constructor(protected injector: Injector) {
    super(environment.urlAPI + '/categorias', injector, Categoria.fromJson);
  }

  getAll(page: number, size: number, filter: string): Observable<Page<Categoria>> {
    page--;
    let url;
    if (filter !== null) {
      url = `${environment.urlAPI}/categorias?page=${page}&size=${size}&nome=${filter}&descricao=${filter}`;
    } else {
      url = `${environment.urlAPI}/categorias?page=${page}&size=${size}`;
    }
    return this.http.get(url).pipe(
      map(Page.fromJson.bind(this)),
      catchError(this.handleError)
    );
  }

  // getAll(page: number, size: number, filtro): Observable<any> {
  //   return this.http.get(url);
  // }

  // deleteById(id: number): Observable<any> {
  //   const url = `${environment.urlAPI}/categorias/${id}`;
  //   return this.http.delete(url);
  // }

  // save(categoria: Categoria) {
  //   const url = `${environment.urlAPI}/categorias`;
  //   return this.http.post(url, categoria);
  // }

  // updateById(categoria: Categoria): Observable<any> {
  //   const url = `${environment.urlAPI}/categorias/${categoria.id}`;
  //   return this.http.put(url, categoria);
  // }

  // getById(id: number) {
  //   const url = `${environment.urlAPI}/categorias/${id}`;
  //   return this.http.get(url);
  // }

}
