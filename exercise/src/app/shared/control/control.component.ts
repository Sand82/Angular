import { AfterContentInit, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {  //preferable way to add classes on the host element. 
    class: 'control',
    '(click)' : 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit {
 
  //@HostBinding('class') className = 'control';  //Diferent way to do this is by @HostBinding() decorator.
  //@HostListener('click')
  label = input.required<string>();
  private el = inject(ElementRef)
  
  //@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input')

   ngAfterContentInit(): void {
    console.log("After content init")
  }

  onClick() {
    // console.log("clicked")
    // console.log(this.el)
    console.log(this.control());
  }
}
