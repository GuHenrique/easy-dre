import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(): boolean {
    if (this.loginService.isAuthenticatedUser()) { // Substitua pelo seu método de verificação de autenticação
      return true; // O usuário está autenticado
    } else {
      this.router.navigate(['/login']); // Redireciona para a página de login
      return false; // O usuário não está autenticado
    }
  }
}
