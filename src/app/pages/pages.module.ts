import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routing';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { Page404Component } from './page404/page404.component';
import { PagesComponent } from './pages.component';
import { MaquinaComponent } from './maquina/maquina.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    HomeComponent,
    Page404Component,
    PagesComponent,
    MaquinaComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    Page404Component,
    MaquinaComponent
  ]
})
export class PagesModule { }
