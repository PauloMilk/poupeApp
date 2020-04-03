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
export class UsuarioService extends BaseResourceService<Usuario> {

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

  atualizarNome(usuario): Observable<Usuario> {
    const url = `${environment.urlAPI}/usuarios/nome`;
    return this.http.patch(url, { nome: usuario.nome }).pipe(
      finalize(() => {
        const authService = this.injector.get(AuthService);
        authService.refreshToken();
        authService.jwtPayload.nome = usuario.nome;
      })
    );
  }

  atualizarSenha(usuario): Observable<Usuario> {
    const url = `${environment.urlAPI}/usuarios/senha`;
    return this.http.patch(url, { senhaAtual: usuario.senha, novaSenha: usuario.novaSenha });
  }



  solicitarRecuperacaoSenha(email: string) {
    const url = `${environment.urlAPI}/usuarios/recuperacao/${email}`;
    return this.http.get(url);
  }

  solicitarAtivacao(email: string) {
    const url = `${environment.urlAPI}/usuarios/solicitacao/ativacao/${email}`;
    return this.http.get(url);
  }

  recuperarSenha(usuario: Usuario) {
    const url = `${environment.urlAPI}/usuarios/recuperacao/senha`;
    return this.http.patch(url, { codigo: usuario.codigo, novaSenha: usuario.senha, email: usuario.email });
  }

}
