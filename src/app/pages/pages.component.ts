import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html'
})

export class PagesComponent implements OnInit {
    
    maq = "";
    
    constructor() {
    }
    
    ngOnInit() { }
    
    getMaq(e: string): void {
        console.log(e);
        this.maq = e;
    }
}