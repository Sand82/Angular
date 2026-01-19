import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/Tasks';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task! : Task;
  @Output() taskCompleted = new EventEmitter<string>();

  onTaskCompleted(): void {
    this.taskCompleted.emit(this.task.id);
  }
}
