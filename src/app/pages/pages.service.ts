import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  maquina: string;
  menu: string;

  constructor(private route: ActivatedRoute) {
   }

  //* Obtiene la máquina elegida en el menú del SideBar
  setMaq(maquina: string, menu: string): void {
    this.maquina = maquina;
    this.menu = menu;
  }

  //* Devuelve la máquina elegida en el menú del SideBar
  getMaq(): string[] {
    return [this.maquina, this.menu];
  }
  
}


