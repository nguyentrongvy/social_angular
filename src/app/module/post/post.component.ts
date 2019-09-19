import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todos/common/models/todo';
import { Store } from '@ngrx/store';
import * as Todos from '../../todos/common/stores/todos/todos.actions';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  numbers: any;
  todos: Array<Todo>;
  message: string;
  bgClass: string;
  p = 1;

  constructor(private store: Store<any>) {
    this.numbers = Array(5).fill(4);
  }

  ngOnInit() {

    this.store.dispatch(new Todos.GetTodos());
    this.store.select('todos').subscribe(response => {
      
      console.log('response', response)

      // this.todos = response.todoList;
      // this.message = response.message;
      // this.bgClass = response.infoClass;
 
      // setTimeout(() => {
      //   this.message = '';
      // }, 2000);
 
    }, error => {
      console.log(error);
    });
  }

}
