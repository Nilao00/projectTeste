import { Component, OnInit } from '@angular/core';
import { AouthServiceService } from './aouth-service.service';
import Urls from '../Services/urlDefault/urlsDefaults';
import { Router } from '@angular/router';
@Component({
  selector: 'app-autenticacao-components',
  templateUrl: './autenticacao-components.component.html',
  styleUrls: ['./autenticacao-components.component.css']
})
export class AutenticacaoComponentsComponent implements OnInit {
  login: string;
  password: string;
  fullname: string;
  email: string;
  cpf: string;
  phone: string;
  showLogin: boolean = true;
  showRegister: boolean = false;
  type: string = "Login";
  rpassword: string;
  constructor(private service: AouthServiceService, private router: Router) { }

  ngOnInit() {
  }

  /* Show form login */
  showLoginBox() {
    this.showLogin = true;
    this.showRegister = false;
    this.type = "Login";
  }
  /* show form register */
  showRegisterBox() {
    this.showLogin = false;
    this.showRegister = true;
    this.type = "Cadastro";
  }
  /* Login user */
  loginUser() {
    const body = {
      login: this.login,
      password: this.password
    }
    this.service.loginService(Urls.endpointDefault, JSON.stringify(body), Urls.oauthToken, false).subscribe(
      data => {
        this.router.navigate(['list']);
        localStorage.setItem("token", data['data']['access_token']);
      }, error => {
        if (error.status == 400) {
          alert(error.error.message);
        }
      }
    )
  }

  /* Register user */
  registerUser() {
    const body = {
      login: this.login,
      password: this.password,
      fullName: this.fullname,
      email: this.email,
      cpf: this.cpf,
      phone: this.phone
    }
    if (this.password === this.rpassword) {
      this.service.registerService(Urls.endpointDefault, body, Urls.registerUser, false).subscribe(
        data => {
          this.router.navigate(['list']);
          localStorage.setItem("token", data['data']['access_token']);
        }, error => {
          if (error.status == 400) {
            alert(error.error.message);
          }
        }
      )
    } else {
      alert("As senhas não conferem");
    }
  }
}
