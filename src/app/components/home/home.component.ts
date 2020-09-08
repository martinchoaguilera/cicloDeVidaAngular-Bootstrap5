import { Component, OnInit, OnChanges,DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>

<app-css></app-css>

<p>
    Hola soy un parrafo en el componente principal
</p>

<app-clases class="mt-3"></app-clases>


<hr class="mt-3">

<h2 class="mt-3">Directivas Personalizadas</h2>

<p class="" [appResaltado]="'red'" >Hola mundo</p>


<app-ng-switch></app-ng-switch>

  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges,DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { 
    console.log('constructor');
    
  }

  ngOnInit() {
    console.log('ngOnInit');
    
  }
  ngOnChanges(){
    console.log('ngOnChanges');
    
  }
  ngDoCheck(){
    console.log('ngDoCheck');
    
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit');
    
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
    
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
    
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
    
  }
  ngOnDestroy(){
    console.log('ngOnDestroy');
    
  }

}
