import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  isToggled: boolean = false;

  toggleModal() : void {    
    this.isToggled = !this.isToggled;
  }  
}
