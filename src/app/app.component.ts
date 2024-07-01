import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
import { RegisterPageComponent } from './login-page/register-page/register-page.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CommonModule } from '@angular/common';
import { MenuAdminComponent } from './admin-pages/menu-admin/menu-admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    MenuAdminComponent,
    RouterOutlet,
    LoginPageComponent,
    RegisterPageComponent,
    MenuBarComponent,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
})
export class AppComponent {
  mostrarMenuBar = true;
  mostrarMenuBar2 = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.mostrarMenuBar =
          !event.urlAfterRedirects.includes('/register-page') &&
          !event.urlAfterRedirects.includes('/login') &&
          !event.urlAfterRedirects.includes('/seccion-usuarios');
      }
    });
  }
}
