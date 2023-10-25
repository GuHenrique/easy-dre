import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private loginService: LoginService) { }

  isAuthenticated(): boolean {
    // Use o serviço de autenticação para verificar o status de autenticação
    return this.loginService.isAuthenticatedUser();
  }

  logout(): void {
    // Chame o método de logout do serviço de autenticação
    this.loginService.logout();
  }

}
