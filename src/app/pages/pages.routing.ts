import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaquinaComponent } from './maquina/maquina.component';
import { PagesComponent } from './pages.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'home', component: PagesComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'electronica/:maq', component: MaquinaComponent },
  ] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

