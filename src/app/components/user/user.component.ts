import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {

  constructor( private activatedRoute : ActivatedRoute ) {
    this.activatedRoute.params.subscribe( params => {
      
      console.log('RUTA PADRE');
      
      console.log( params );
      
    })
   }

  ngOnInit(): void {
  }

}
