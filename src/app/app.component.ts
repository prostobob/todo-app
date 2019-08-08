import { Component, OnInit } from '@angular/core';
import { ITodo } from './models/todo.interface';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-todo';

  constructor() {}

  ngOnInit() {

  }
}
