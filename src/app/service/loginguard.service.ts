import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(): boolean {
    if (this.loginService.isAuthenticatedUser()) { // Substitua pelo seu método de verificação de autenticação
      this.router.navigate(['/']); // Redireciona para a página inicial
      return false; // O usuário está autenticado, portanto, não permita o acesso à página de login
    }
    return true; // O usuário não está autenticado e pode acessar a página de login
  }
}
