import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() name! : string
  @Input() style! : string

  @Output() EmitCurrentEvent = new EventEmitter<string>()

  @Output()
  OnClick = new EventEmitter<string>();

  emitEvent() {
    this.OnClick.emit('From button');
  }
}
