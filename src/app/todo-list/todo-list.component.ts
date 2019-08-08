import { Component, OnInit } from '@angular/core';
import { ITodo } from '../models/todo.interface';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todosArray: ITodo[] = [];
  newTitle = '';
  newText = '';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().then((res) => {
      this.todosArray = res;
    });
  }

  deleteTodo(text: string) {
    const index = this.todosArray.findIndex(el => el.text === text);
    this.todosArray.splice(index, 1);
  }

}
