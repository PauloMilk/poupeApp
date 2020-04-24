import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router,  private location: Location) { }
  canActivate(): boolean {
    if (this.authService.temPermissao()) {
      this.router.navigate(['/lancamento']);
      return false;
    }
    return true;
  }

}
