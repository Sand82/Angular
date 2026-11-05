import { Component, Input } from "@angular/core";
import { TaskData } from "../../../Data/contracts";

@Component({
    selector: "app-task",
    templateUrl: "./task.component.html",
    styleUrl: "./task.component.css",
    standalone: true,
    inputs: [],
})
export class TaskComponent {
    @Input() task: TaskData | undefined;
}