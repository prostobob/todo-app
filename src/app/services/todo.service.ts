import { Injectable } from '@angular/core';

import { ITodo } from '../models/todo.interface';
import { IForm } from '../models/form.inteface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {}

  getTodos(limit: number = 10): Promise<ITodo[]> {
    return fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
      .then(data => data.json())
      .then(todos =>
        todos.map(todo => {
          return {
            id: todo.id,
            status: todo.complete,
            text: todo.title,
            title: todo.req ? todo.req : `Untitled ${todo.id}`
          };
        })
      );
  }

  getTodo(id: string = '1'): Promise<ITodo> {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(data => data.json())
      .then(todo => {
        return {
          id: todo.id,
          status: todo.complete,
          text: todo.title,
          title: todo.req ? todo.req : `Untitled ${todo.id}`
        };
      });
  }

  addTodo(formData: IForm) {
    if (!formData.text) {
      return false;
    }
    const newItem: ITodo = {
      id: Math.random(),
      status: false,
      text: formData.text,
      title: formData.text
    };
    return fetch(`https://jsonplaceholder.typicode.com/todos`, {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(data => data.json())
      .then(todo => console.log('TODO ADDED', todo));
    // this.todosArray.unshift(newItem);
    // this.newText = '';
    // this.newTitle = '';
  }

  editTodo(todo: ITodo) {
    return fetch(`https://jsonplaceholder.typicode.com/todos`, {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(data => data.json())
      .then(item => console.log('TODO EDITTED', item));
  }

  deleteTodo(id: string) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(data => data.json())
      .then(item => console.log('TODO DELETED', item));
  }
}
