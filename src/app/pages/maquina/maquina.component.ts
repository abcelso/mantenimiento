import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-maquina',
  templateUrl: './maquina.component.html',
  styles: [
  ]
})
export class MaquinaComponent implements OnInit, DoCheck {

  maquina: string;

  constructor(private pageService: PagesService, private route: ActivatedRoute) {

  }
  ngDoCheck(): void {
    this.maquina = this.pageService.getMaq()[0];

    console.log(this.pageService.getMaq()[1]);
    
    // const pru = this.route.snapshot.params.maq;

    // console.log("ruta",pru);
  }
  
  ngOnInit(): void {
    
  }
  

}
