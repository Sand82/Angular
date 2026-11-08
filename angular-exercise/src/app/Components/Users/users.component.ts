import { Component, inject, Input } from "@angular/core";
import { UserComponent } from "./User/user.component";
import { AsyncPipe } from "@angular/common";
import { UserService } from "../../Services/userService";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    imports: [UserComponent, AsyncPipe],
    standalone: true
})
export class UsersComponent {

    private userService = inject(UserService);
    users$ = this.userService.getUsers();
}