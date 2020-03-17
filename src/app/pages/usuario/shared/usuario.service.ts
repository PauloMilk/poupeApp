import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/pages/usuario/shared/usuario';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseResourceService<Usuario>{

  constructor(protected injector: Injector) {
    super(environment.urlAPI + '/usuarios', injector, Usuario.fromJson);
  }

  ativarConta(codigo: string): Observable<any> {
    const url = `${environment.urlAPI}/usuarios/confirmacao/${codigo}`;
    return this.http.get(url);
  }

  getDadosUsuario(): Observable<Usuario> {
    const url = `${environment.urlAPI}/usuarios`;
    return this.http.get(url);
  }

  atualizarDados(usuario): Observable<Usuario> {
    const url = `${environment.urlAPI}/usuarios`;
    return this.http.patch(url, { nome: usuario.nome }).pipe(
      finalize(() => {
        const authService = this.injector.get(AuthService);
        authService.refreshToken();
        authService.jwtPayload.nome = usuario.nome;
      })
    );
  }


}
