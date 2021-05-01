import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button',
  template: `
    <input class="todo-input"
           #inputElementRef
           [value]="title"
           placeholder="Enter task here..."
           (keyup.enter)="submitValue($any($event.target).value)">

    <button class="btn"
            (click)="submitValue(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button.component.css']
})
export class InputButtonComponent implements OnInit {
  title = "";
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  submitValue(newTitle:string):void {
    this.submit.emit(newTitle);
  }
}
