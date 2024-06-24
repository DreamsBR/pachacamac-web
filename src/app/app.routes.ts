import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './login-page/register-page/register-page.component';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
import { MesaPartesStep1Component } from './mesa-partes/mesa-partes-step1/mesa-partes-step1.component';
import { SeguimientoPartesStep2Component } from './mesa-partes/seguimiento-partes-step2/seguimiento-partes-step2.component';

export const routes: Routes = [
    { path: '', component: LoginPageComponent },

    { path: 'register-page', component: RegisterPageComponent },
    { path: 'mesa-partes-step1', component: MesaPartesStep1Component },
    { path: 'mesa-partes-step2', component: SeguimientoPartesStep2Component }


];
