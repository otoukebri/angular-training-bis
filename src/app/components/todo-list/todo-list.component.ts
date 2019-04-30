import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos = new Array<Todo>();

  constructor() { }

  ngOnInit() {
    this.todos.push(new Todo('Todo 1'));
    this.todos.push(new Todo('Todo 2'));
  }

}
