import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button',
  template: `
    <p>
      input-button works!
      The title is {{ title }}
    </p>
  `,
  styleUrls: ['./input-button.component.css']
})
export class InputButtonComponent implements OnInit {
  title = 'Hello World';
  constructor() { }

  ngOnInit(): void {
  }

}
