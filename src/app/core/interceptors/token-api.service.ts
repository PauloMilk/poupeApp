import { throwError as observableThrowError, Observable, BehaviorSubject } from 'rxjs';

import { take, filter, catchError, switchMap, finalize } from 'rxjs/operators';
import { Injectable, Injector } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpErrorResponse } from "@angular/common/http";
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TokenApiService implements HttpInterceptor {
  isRefreshingToken = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private injector: Injector, private router: Router, private authService: AuthService) { }

  addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({ setHeaders: { Authorization: 'Bearer ' + token } });
  }

  // tslint:disable-next-line: max-line-length
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {


    if (!this.authService.token) {
      return next.handle(req);
    }

    return next.handle(this.addToken(req, this.authService.token)).pipe(
      catchError(error => {
        if (error.status == 403 || error.status == 401) {
          this.logoutUser();
        }
        return observableThrowError(error);
      }));
  }

  logoutUser() {
    this.authService.deslogar();
    this.router.navigate(['/login']);
    return observableThrowError('');
  }

}



//  // console.log("TESTE -------- TESTE")
//     // console.log(this.authService.token);
//     if (this.authService.token) {
//       if (!this.authService.estaInspirado()) {
//         console.log("inspirado")
//         return next.handle(this.addToken(req, this.authService.token));
//       }

//       // this.addToken(req, this.authService.token);
//       return next.handle(req).pipe(
//         catchError((errorResponse: HttpErrorResponse) => {
//           console.log(req);
//           if (errorResponse.status === 401) {
//             console.log('error 401');
//             const url = `${environment.urlAPI}/oauth/token`;
//             const httpOptions = new HttpHeaders({
//               'Content-Type': 'application/x-www-form-urlencoded',
//               'Authorization': 'Basic d2ViOndlYg==',
//             });

//             const params = new URLSearchParams();
//             params.append('grant_type', 'refresh_token');

//             return this.http.post(url, params.toString(), { headers: httpOptions, withCredentials: true }).pipe(
//               flatMap((resp: any) => {
//                 console.log('TESTE');
//                 this.authService.armazenarToken(resp.access_token);
//                 return next.handle(this.addToken(req, this.authService.token));
//               })
//             );
//           }
//           return throwError(errorResponse);
//         })
//       );
//     }
//     return next.handle(req);
