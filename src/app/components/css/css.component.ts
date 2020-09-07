import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p class="mt-3">
      css works!
    </p>
  `,
  styles: [`
  p{
    color:red;
    font-size:20px
  }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
