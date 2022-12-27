import { Todo } from './../../modal/Todo';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todo!: Todo[];
  faTrashAlt = faTrashAlt;
  constructor(private todoService: TodoService) {}
  // called when component is mount
  ngOnInit(): void {
    // getting all todos
    this.todoService.getTodos().subscribe((todos) => {
      this.todo = todos;
    });
  }

  // update todo
  chnageTodoStartus(todo: Todo) {
    this.todoService.updateTodo(todo);
  }

  //delete doto
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
