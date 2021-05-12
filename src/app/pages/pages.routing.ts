import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MaquinaComponent } from './maquina/maquina.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: 'home', component: PagesComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'electronica/:maq', component: MaquinaComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

