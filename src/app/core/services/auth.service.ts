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

  jwtPayload: any;
  private jwtHelper;
  // private _autenticado: BehaviorSubject<boolean>;
  // public readonly autenticado$: Observable<boolean>;
  constructor(private http: HttpClient) {
    this.jwtHelper = new JwtHelperService();
    this.carregarToken();
  }

  logar(usuario: Usuario): Observable<boolean> {
    const { url, httpOptions } = this.createHeaders();

    // const params = new URLSearchParams();
    // params.append('username', usuario.email);
    // params.append('password', usuario.senha);
    // params.append('grant_type', 'password');

    return this.http.post(url, {email: usuario.email, senha: usuario.senha}, { headers: httpOptions }).pipe(
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
    // const url = `${environment.urlAPI}/tokens/revoke`;
    // this.http.delete(url).subscribe(
    //   () => {
    //     this.jwtPayload = null;
    //     localStorage.removeItem('token');
    //   },
    //   (error) => {
    //     this.jwtPayload = null;
    //     localStorage.removeItem('token');
    //     console.log(error);
    //   }
    // );
  }

  refreshToken(): Observable<string> {
    const { url, httpOptions } = this.createHeaders();

    const params = new URLSearchParams();
    params.append('grant_type', 'refresh_token');

    return this.http.post(url, params.toString(), { headers: httpOptions, withCredentials: true }).pipe(
      share(),
      map((res: any) => {
        const token: string = res.access_token;
        this.armazenarToken(token);
        return token;
      })
    );

  }


  private createHeaders() {
    const url = `${environment.urlAPI}/auth`;
    const httpOptions = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return { url, httpOptions };
  }
}
