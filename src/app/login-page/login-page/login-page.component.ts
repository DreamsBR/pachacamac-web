import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormsModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit {
  constructor(private _router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    console.log('login-page');
  }
  usuario: string = '';
  contrasenia: string = '';

  bodyData: any = {
    usuario: '',
    contrasenia: '',
  };

  login() {
    console.log(this.usuario);
    console.log(this.contrasenia);

    let bodyData = {
      usuario: this.usuario,
      contrasenia: this.contrasenia,
    };

    this.http
      .post('http://localhost:8085/api/login/authenticate', bodyData)
      .subscribe((resultData: any) => {
        console.log(resultData);
        if (this.usuario == resultData.usuario && this.contrasenia == resultData.contrasenia) {
          this._router.navigate(['/mesa-partes-step1']);
        }else {
          alert('No se pudo iniciar sesión')
        }
      });
  }

  goToRegisterPage() {
    this._router.navigate(['/register-page']);
    console.log('goRegisterPage');
  }

  goToNewPwd() {}
}
