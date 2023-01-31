import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output()
  sidenavToggle = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}