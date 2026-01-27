import { afterNextRender, afterRender, AfterViewInit, Component, ElementRef, EventEmitter, output, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit {  
  //@ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  //@Output() add = new EventEmitter<{title: string, text: string}>();
  add = output<{title: string, text: string}>();

  constructor(){
    afterRender(() => {
      console.log("After render")
    });

    afterNextRender(() => {
      console.log("After next render")
    });
  }

  onSubmit(title: string, titleText : string) {
    console.log(title, titleText);

    this.add.emit({title: title, text: titleText})
    
    this.form().nativeElement.reset();
  }

  ngAfterViewInit(): void {
    console.log('After view init');
  }
}
