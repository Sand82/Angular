import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TasksService } from '../../core/services/task/tasks.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  private taskService = inject(TasksService);

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      console.log(tasks);
    });
  } 
}
