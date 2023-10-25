import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isAuthenticated = false;
  private apiUrl: string = "http://192.168.0.10:8080/auth/login";

  constructor(private http: HttpClient) {

  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { email, password }).pipe(
      // Verifica se a resposta do backend é bem-sucedida
      tap((response: any) => {
        if (response && response.token) {
          // Se a resposta contiver um token (ou qualquer outra confirmação de autenticação),
          // você pode considerar o usuário autenticado
          this.isAuthenticated = true;
        }
      })
    );
  }

  logout(): void {

    localStorage.removeItem('token');
    this.isAuthenticated = false;
  }

  // Adicione uma função para verificar o status de autenticação
  isAuthenticatedUser(): boolean {
    const token = localStorage.getItem("token");
    if (token !== null) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }

    return this.isAuthenticated;
  }
}
