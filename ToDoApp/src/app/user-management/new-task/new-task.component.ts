import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Task } from '../../models/Tasks';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Input() userId!: string;
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() taskCreated = new EventEmitter<Task>();
  taskTitle: string = '';
  taskDescription: string = '';

  onClose() {    
    this.closeModal.emit(false);    
  }

  onSubmit() {
    let id = Guid.create();
    const newTask: Task = {
      id: id.toString(),
      title: this.taskTitle,
      description: this.taskDescription,
      userId: this.userId
    };
    this.taskCreated.emit(newTask);
    this.closeModal.emit(false);
  }
}
