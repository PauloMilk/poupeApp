import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private location: Location) {
  }

  ngOnInit() {
    // if (this.tokenService.token) {
    //   this.authService.criarSessao(this.tokenService.token);
    // }

  }
}
