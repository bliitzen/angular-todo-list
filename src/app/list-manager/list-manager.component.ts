import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  template: `
  <div class="todo-app">
    <app-input-button (submit)="addItem($event)"></app-input-button>

    <ul>
      <li *ngFor="let todoItem of todoList">
        <app-todo-item [item]="todoItem"
                       (remove)="removeItem($event)"
                       (update)="updateItem($event.item, $event.changes)">              
        </app-todo-item>
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];

  constructor(private service: TodoListService) {
    service.getTodoList();
   }

  ngOnInit(): void {
    this.todoList = this.service.getTodoList();
  }
  
  addItem(title:string) {
    this.service.addItem({ title });
  }

  removeItem(item): void {
    this.service.deleteItem(item);
  }

  updateItem(item, changes): void {
    this.service.updateItem(item, changes);
  }
}
