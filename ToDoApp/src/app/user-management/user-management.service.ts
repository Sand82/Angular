import { Injectable } from '@angular/core';
import { TODO_TASKS } from '../data/tasks';
import { Task } from '../models/Tasks';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  userTasks : Task[] = TODO_TASKS;
  isNewTaskModalOpen: boolean = false;

  getTasksByUserId(userId: string): Task[] {
    return this.userTasks.filter(u => u.userId === userId);
  }

  createdTask(task: Task) : void {
    this.userTasks.unshift(task);
    this.onCloseModal();
  } 

  removeTask(taskId: string): void {
    this.userTasks = this.userTasks.filter(t => t.id !== taskId);
  }

  onOpenModal(): void {
    this.isNewTaskModalOpen = true;
  }

  onCloseModal(): void {
    this.isNewTaskModalOpen = false;
  }
}
