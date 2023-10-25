import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {


    this.loginForm = formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });

  }

  login() {
    const val = this.loginForm.value;

    if (val.email && val.password) {
      this.loginService.login(val.email, val.password)
        .subscribe(
          (response: any) => {

            if (response && response.token) {
              localStorage.setItem("token", response.token);
              localStorage.setItem("email", response.email);
              this.router.navigateByUrl("/")
            } else {

            }
          },
          (error) => {

            alert("Email ou senha incorretos!")
            this.loginForm.reset()
          }
        )
    }
  }

}
