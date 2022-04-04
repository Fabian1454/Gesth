import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { OutsourcingComponent } from './outsourcing/outsourcing.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EventosComponent } from './eventos/eventos.component';




const routes: Routes =[
    { path: 'home',             component: HomeComponent },    
    { path: 'register',           component: SignupComponent },    
    { path: 'login',          component: LoginComponent },
    { path: 'outsourcing',          component: OutsourcingComponent },
    { path: 'contacto',          component: ContactoComponent },
    { path: 'eventos',          component: EventosComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
