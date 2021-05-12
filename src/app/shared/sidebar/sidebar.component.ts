import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PagesService } from 'src/app/pages/pages.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  maqTintoreria = ['Rama I', 'Rama II', 'Rama III', 'Fongs Grande', 'Fongs Chica', 'Red Flag',
                    'Testa I', 'Testa II', 'Testa III', 'Zimmer', 'Encoladora Benninger'];
  
  @Output() tipoMaq: EventEmitter<string> = new EventEmitter(); 
  
  constructor(private router: Router, private pageService: PagesService) {
    this.maqTintoreria.sort();
   }

  ngOnInit(): void {
  }

  cargarUrl(maq: string, menu: string): void {
    
    this.pageService.setMaq(maq, menu);
    
    maq = maq.replace(/ /g, "");

    this.tipoMaq.emit(maq);

    
    this.router.navigate([`/home/electronica/${maq}`]);
    
    console.log(maq); 
  }

}
