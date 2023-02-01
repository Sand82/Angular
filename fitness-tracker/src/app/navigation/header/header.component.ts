import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output()
  sidenavToggle = new EventEmitter<void>();

  isAuth = false;
  authSubscription: Subscription | null = null;

  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(
      (authStatus) => {
        this.isAuth = authStatus;
      }
    );
  }

  onLogout() {
    this.authService.logout();
    this.route.navigate(['/signup']);
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
