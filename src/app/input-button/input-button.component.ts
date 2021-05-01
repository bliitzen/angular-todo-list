import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button',
  template: `
    <p>
      input-button works!
      The title is {{ title }}
    </p>

    <input [value]="title"
           (keyup.enter)="changeTitle($any($event.target).value)">

    <button (click)="changeTitle('Button Clicked!')">
      Save
    </button>
  `,
  styleUrls: ['./input-button.component.css']
})
export class InputButtonComponent implements OnInit {
  title = "Hello world";

  constructor() {}

  ngOnInit(): void {}

  changeTitle(newTitle:string):void {
    this.title = newTitle;
  }
}
