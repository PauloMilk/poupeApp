import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Relatorio } from './relatorio';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService extends BaseResourceService<Relatorio> {

  constructor(protected injector: Injector) {
    super(environment.urlAPI + '/relatorios', injector, Relatorio.fromJson);
  }

  getRelatorioByMesAno(mes, ano): Observable<Relatorio> {
    const url = `${this.apiPath}/${ano}/${mes}`;
    return this.http.get(url).pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handleError)
    );
  }


  getAnos(): Observable<any> {
    const url = `${this.apiPath}/anos`;
    return this.http.get(url);
  }
}
