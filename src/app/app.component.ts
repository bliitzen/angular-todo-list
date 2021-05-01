import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{ title }} app is running!
    </h1> 

    <app-input-button></app-input-button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-list';
}
