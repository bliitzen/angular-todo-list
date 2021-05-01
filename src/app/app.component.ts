import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{ title }} app is running!
    </h1> 

    <app-input-button></app-input-button>

    <ul>
      <li *ngFor="let todoItem of todoList">
        <app-todo-item [item]="todoItem"></app-todo-item>
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-list';
  todoList = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
}
