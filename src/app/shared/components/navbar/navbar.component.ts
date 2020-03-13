import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  nomeUsuario = localStorage.getItem('nomeUsuario');
  constructor(private authService: AuthService, private router: Router) { }
  collapse = true;
  ngOnInit() {
  }

  logout() {
    this.authService.deslogar();
    this.router.navigate(['/login']);
  }

}
