import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  title = '';
  text = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  addItem() {
    this.todoService.addTodo({
      title: this.title,
      text: this.text
    });
  }
}
