import { Component, OnInit, ContentChild, AfterContentInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, AfterContentInit, AfterViewInit {

  todos = new Array<Todo>();

  @ContentChild(TodoComponent)
  todoContentChild: TodoComponent;

  @ViewChildren(TodoComponent)
  todoViewChildren: QueryList<TodoComponent>;

  constructor() { }

  ngOnInit() {
    this.todos.push(new Todo('Todo 1'));
    this.todos.push(new Todo('Todo 2'));
  }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit.todoContentChild  ${JSON.stringify(this.todoContentChild)}`);
  }

  ngAfterViewInit() {
    this.todoViewChildren.forEach( x => {
      console.log(`ngAfterViewInit.todoViewChildren  ${JSON.stringify(x)}`);
    });
    
  }
}
