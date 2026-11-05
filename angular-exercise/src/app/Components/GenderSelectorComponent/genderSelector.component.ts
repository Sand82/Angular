import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gender-selector',
  templateUrl: './genderSelector.component.html',
  styleUrl: './genderSelector.component.css',
  standalone: true,
})
export class GenderSelectorComponent {
  gender: string = 'female';

  @Output() genderChange = new EventEmitter<string>();

  toggleGender(): void {
    this.gender = this.gender === 'male' ? 'female' : 'male';
    this.genderChange.emit(this.gender);
  }
}
