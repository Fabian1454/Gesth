import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { OutsourcingComponent } from './outsourcing/outsourcing.component';

import { ContactoComponent } from './contacto/contacto.component';
import { EventosComponent } from './eventos/eventos.component';
import { VacantesComponent } from './vacantes/vacantes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CapacitacionesComponent } from './capacitaciones/capacitaciones.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';



//bootstrap

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,    
    NavbarComponent,
    FooterComponent,    
    OutsourcingComponent,
    ContactoComponent,
    EventosComponent,
    VacantesComponent,
    PageNotFoundComponent,
    CapacitacionesComponent    
    ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
