import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: []
})
export class TodoComponent implements OnInit, OnChanges {

    _todo: Todo;

     @Input('todo')
     set todo(todo: Todo) {
         this._todo = todo;
     }

     get todo() {
         return this._todo;
     }

    ngOnInit() {
        // this.todo = new Todo('Todo item 1');
    }

    ngOnChanges() {
       // console.log(this._todo);
    }
}
