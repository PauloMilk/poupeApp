import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, finalize, share } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Usuario } from '../../pages/usuario/shared/usuario';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiPath = `${environment.urlAPI}/auth`;
  jwtPayload: any;
  private jwtHelper;
  // private _autenticado: BehaviorSubject<boolean>;
  // public readonly autenticado$: Observable<boolean>;
  constructor(private http: HttpClient) {
    this.jwtHelper = new JwtHelperService();
    this.carregarToken();
  }

  logar(usuario: Usuario): Observable<boolean> {
    return this.http.post(this.apiPath, {email: usuario.email, senha: usuario.senha}).pipe(
      map((resp: any) => {
        this.jwtPayload = null;
        this.armazenarToken(resp.token);
        return true;
      })
    );

  }

  temPermissao() {
    return this.jwtPayload != null;
  }

  get token() {
    return localStorage.getItem('token');
  }

  estaInspirado() {
    return this.jwtHelper.isTokenExpired(this.token);
  }

  public armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private carregarToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.armazenarToken(token);
    }
  }

  deslogar() {
    this.jwtPayload = null;
    localStorage.removeItem('token');
  }
}
