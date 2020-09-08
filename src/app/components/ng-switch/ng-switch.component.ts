import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: [
  ]
})
export class NgSwitchComponent implements OnInit {
  
  alert: string;
  alerts : string[] = ['info',  'warning',  'success',  'danger'];
  contador : number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  cambiarSwitch(){
    if( this.contador === 3 ){
      this.contador = 0
    }else{
      this.contador += 1;
    }
     this.alert = this.alerts[this.contador];
     
    return this.alert;
  }

}
