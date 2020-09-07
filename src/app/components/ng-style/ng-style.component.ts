import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <!-- <p [ngStyle]="{'font-size': tamano + 'px'}"> -->
    <p [style.fontSize.px]="tamano">
      Hola mundo..estoy utilizando ng-Style!
    </p>

    <button class="btn btn-primary mr-2" (click)="aumentarTamano()" > <i class="fa fa-plus" ></i> </button>
    <button class="btn btn-primary" (click)="reducirTamano()"><i class="fa fa-minus" ></i></button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {
  
  tamano: number = 20;
  constructor() { }

  ngOnInit(): void {
  }

  aumentarTamano(){
    if( this.tamano === 50 ){
      alert('El tamaño no puede ser mayor a 50px!');
      return;
    }
    this.tamano += 5;
  }
  reducirTamano(){
    if( this.tamano === 5 ){
      alert('El tamaño no puede ser menor a 5px!');
      return;
    }
    this.tamano -= 5;
  }

}
