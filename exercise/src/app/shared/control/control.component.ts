import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

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
export class ControlComponent {
  //@HostBinding('class') className = 'control';  //Diferent way to do this is by @HostBinding() decorator.
  //@HostListener('click')
  label = input.required<string>();
  private el = inject(ElementRef)

  onClick() {
    // console.log("clicked")
    // console.log(this.el)
  }
}
