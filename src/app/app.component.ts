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
    },
    {
      heading: 'Buy Eggs',
      desc: 'Make omlet from 4 eggs',
    },
    {
      heading: 'Sell Eggs',
      desc: 'Make omlet from 4 eggs',
    },
    {
      heading: 'Throw Eggs',
      desc: 'Make omlet from 4 eggs',
    },
  ];
  todoDesc: string = '';
  todoHeading: string = '';

  onTodoClick() {
    if (this.todoHeading!=="" && this.todoDesc!=="") {
      this.allTodos.push({"heading":this.todoHeading,"desc":this.todoDesc})
      this.todoHeading = "";
      this.todoDesc = "";
    }
  }

  onDelete(delTodo:any) {
    console.log(delTodo)
    this.allTodos = this.allTodos.filter((todo:any)=>{return todo.heading !== delTodo.heading})
  }
  onDone(checkTodo:any) {
    console.log();
  }
}
