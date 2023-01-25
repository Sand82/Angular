import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";

@Directive({
  selector: "[highlighted]",
  exportAs: "hl",
})
export class HighlightedDirective {
  @Input("highlighted")
  isHighLighted = false;

  @Output()
  toggleHighlight = new EventEmitter();

  constructor() {
    console.log("Directive created.....");
  }

  toggle() {
    this.isHighLighted = !this.isHighLighted;
    this.toggleHighlight.emit(this.isHighLighted);
  }

  @HostListener("mouseover", ["$event"])
  mouseOver($event) {
    this.isHighLighted = true;
    this.toggleHighlight.emit(this.isHighLighted);
  }

  @HostListener("mouseleave", ["$event"])
  mouseLeave($event) {
    this.isHighLighted = false;
    this.toggleHighlight.emit(this.isHighLighted);
  }

  // @HostBinding('className')
  // cssClasses() {
  //   return "highlighted";
  // }
  // @HostBinding("style.border")
  // get cssClasses() {
  //   return "1px solid red";
  // }
  @HostBinding("class.highlighted")
  get cssClasses() {
    return this.isHighLighted;
  }
  // @HostBinding("attr.disabled")
  // get disabled() {
  //   return "true";
  // }
}
