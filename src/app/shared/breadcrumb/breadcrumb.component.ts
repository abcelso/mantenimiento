import { Component, DoCheck, OnInit } from '@angular/core';
import { PagesService } from 'src/app/pages/pages.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: [
  ]
})
export class BreadcrumbComponent implements OnInit, DoCheck {

  maquina: string;
  menu: string;

  constructor(private pageService: PagesService) {
    
  }
  ngDoCheck(): void {
    this.maquina = this.pageService.getMaq()[0];
    this.menu = this.pageService.getMaq()[1];
  }

  ngOnInit(): void {
  }

}
