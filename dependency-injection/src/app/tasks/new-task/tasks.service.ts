import { inject, Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "../task.model";
import { LogginService } from "../../loggin.service";

@Injectable({
    providedIn: 'root'
})

export class TasksService {
    private tasks = signal<Task[]>([]);
    private logginService = inject(LogginService);

    allTasks = this.tasks.asReadonly();    

    addTask(taskData: { title: string, description: string}){

        let newTask: Task = {
            ...taskData,
            id: Math.random().toString(),
            status: 'OPEN'
        };
        this.tasks.update((oldTasks) => [...oldTasks, newTask]);
        this.logginService.log(`Added task with title ${newTask.title}`)
    }  
    
    updateTaskStatus(taskId: string, newStatus: TaskStatus){
        this.tasks.update((oldTask) => oldTask.map((task) => task.id === taskId ? {...task, status: newStatus} : task));
        this.logginService.log(`Change task status to ${newStatus}`)
    }
}