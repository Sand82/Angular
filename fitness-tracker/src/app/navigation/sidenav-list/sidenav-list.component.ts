import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
})
export class SidenavListComponent implements OnInit, OnDestroy {
  isAuth = false;
  authSubscription: Subscription | null = null;

  constructor(private authService: AuthService, private route: Router) {}

  @Output()
  sidenavClose = new EventEmitter<void>();

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(
      (authStatus) => {
        this.isAuth = authStatus;
      }
    );
  }

  onClose() {
    this.sidenavClose.emit();
  }

  onLogout() {
    this.authService.logout();
    this.route.navigate(['/signup']);
    this.onClose();
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }
}
