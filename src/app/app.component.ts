import { Component, OnInit } from '@angular/core';
import { ITodo } from './todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-todo';
  todosArray: ITodo[] = [];
  newTitle = '';
  newText = '';

  constructor() {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos =>
        todos.map(todo => {
          return {
            id: todo.id,
            status: todo.complete,
            text: todo.title,
            title: todo.req ? todo.req : `Untitled ${todo.id}`
          };
        })
      )
      .then(data => {
        data.length = 10;
        return data;
      })
      .then(data => (this.todosArray = data));
  }

  addTodo() {
    if (!this.newText) {
      return false;
    }
    const newItem: ITodo = {
      id: Math.random(),
      status: false,
      text: this.newText,
      title: this.newTitle
    };
    this.todosArray.unshift(newItem);
    this.newText = '';
    this.newTitle = '';
  }

  deleteTodo(text) {
    const index = this.todosArray.findIndex(el => el.text === text);
    this.todosArray.splice(index, 1);
  }
}
