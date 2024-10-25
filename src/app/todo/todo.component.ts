import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTodo: string = '';

  constructor(public todoService: TodoService) {}

  addTodo() {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo);
      this.newTodo = '';
    }
  }

  toggleComplete(todo: any) {
    this.todoService.toggleComplete(todo);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }
}
