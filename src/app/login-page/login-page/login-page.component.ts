import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{

  constructor(private _router: Router) { 
    

  }
  public ngOnInit(): void {
      
  }

  login(){
    this._router.navigate(['/mesa-partes-step1'])
  }


  goToRegisterPage(){
    this._router.navigate(['/register-page']);
    console.log('goRegisterPage')
  }

  goToNewPwd(){
    
  }
}
