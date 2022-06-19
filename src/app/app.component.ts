import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  allTodos: any = [
    {
      heading: 'Make Eggs',
      desc: 'Make omlet from 4 eggs',
      active: true,
    },
    {
      heading: 'Buy Eggs',
      desc: 'Make omlet from 4 eggs',
      active: true,
    },
    {
      heading: 'Sell Eggs',
      desc: 'Make omlet from 4 eggs',
      active: true,
    },
    {
      heading: 'Throw Eggs',
      desc: 'Make omlet from 4 eggs',
      active: false,
    },
  ];
  todoDesc: string = '';
  todoHeading: string = '';
  error: boolean = false;

  onTodoClick() {
    if (this.todoHeading !== '' && this.todoDesc !== '') {
      this.allTodos.push({
        heading: this.todoHeading,
        desc: this.todoDesc,
        active: true,
      });
      this.todoHeading = '';
      this.todoDesc = '';
    } else {
      this.error = true;
    }
  }

  onDelete(delTodo: any) {
    console.log(delTodo);
    this.allTodos = this.allTodos.filter((todo: any) => {
      return todo.heading !== delTodo.heading;
    });
  }
  onDone(checkTodo: any) {
    this.allTodos.forEach((element: any) => {
      if (element.heading === checkTodo.heading) {
        element.active = !element.active;
      }
    });
  }
  onKeyInput() {
    this.error = false;
  }
}
