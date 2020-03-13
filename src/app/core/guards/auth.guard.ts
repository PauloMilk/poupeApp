import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(): boolean {
    // let teste;
    // // this.authService.autenticado$.subscribe(resp => { teste = resp; });

    if (!this.authService.temPermissao()) {
      this.router.navigate(['/login']);
      return false;
    }

    // if (!teste) {
    //   this.router.navigate(['/login']);
    // }

    // // return this.authService.autenticado$;
    return true;
  }
}
