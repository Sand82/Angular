import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
  selector: "[ngxUnless]",
})
export class NgxUnlessDirective {
  visible = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input()
  set ngxUnless(condition: boolean) {
    if (!condition && !this.visible) {
      this.visible = true;
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (condition && this.visible) {
      this.viewContainer.clear();
      this.visible = false;
    }
  }
}
