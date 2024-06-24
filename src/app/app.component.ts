import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent } from "./login-page/login-page/login-page.component";
import { RegisterPageComponent } from './login-page/register-page/register-page.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginPageComponent, RegisterPageComponent]
})
export class AppComponent {
  title = 'web-pachacutec';
}
