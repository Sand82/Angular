import { CommonModule} from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input()
  buttonName! : string;

  @Input()
  btnClass!: string

  @Output()
  OnClick = new EventEmitter<string>();

  emitEvent() {
    this.OnClick.emit('from button')
  }
}
