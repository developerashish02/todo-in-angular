import { TodoService } from './../../services/todo.service';
import { Todo } from './../../modal/Todo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  todoTitle!: string;
  constructor(private todoServices: TodoService) {}
  handleAdd() {
    const newTodo: Todo = {
      id: Math.random().toString(),
      title: this.todoTitle,
      isCompleted: true,
      date: new Date(),
    };

    this.todoServices.addTodo(newTodo);
    this.todoTitle = '';
  }
}
