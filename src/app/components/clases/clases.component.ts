import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
  ]
})
export class ClasesComponent implements OnInit {
     
  // alerts: string[] = ['alert-primary',  'alert-secondary',  'alert-danger',  'alert-success']  ;
  alert: string= 'alert-primary';
  objeto: any ={
    color: true,
  } 
  
  loading: boolean = false;

  constructor() { 
  }

  ngOnInit(): void {
  }

  ejecutar() {
    this.loading= true;
    setTimeout( ()=> this.loading = false, 3000)
  }
}
