import { Todo } from './../modal/Todo';
import { Injectable } from '@angular/core';
import { Observer, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        id: '1',
        title: 'Go to the office at 10.00am',
        isCompleted: false,
        date: new Date(),
      },
      {
        id: '2',
        title: 'Learn React',
        isCompleted: false,
        date: new Date(),
      },
      {
        id: '3',
        title: 'Lear Angular',
        isCompleted: false,
        date: new Date(),
      },
      {
        id: '4',
        title: 'Learn C++',
        isCompleted: true,
        date: new Date(),
      },
    ];
  }

  getTodos() {
    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(todo: Todo) {
    this.todos.map((singleTodo) => {
      if (singleTodo.id === todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
  }

  deleteTodo = (todo: Todo) => {
    const res = this.todos.findIndex((currObj) => {
      currObj.id === todo.id;
    });

    this.todos.splice(res, 1);
  };
}
