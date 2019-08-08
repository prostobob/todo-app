import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../models/todo.interface';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ITodo;
  @Output() deleteItemId = new EventEmitter<string>();

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  delete(id: string) {
    this.todoService.deleteTodo(id);
  }

  edit() {
    this.todoService.editTodo(this.todo);
  }
}
