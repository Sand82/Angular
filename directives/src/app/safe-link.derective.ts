import { Directive, ElementRef, inject, input } from "@angular/core";
import { LogDirective } from "./log.directive";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    },
    hostDirectives: [
        LogDirective
    ]
})
export class SafeLinkDerective {
    queryParam = input('myapp');
    private hosteElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

    constructor(){
        console.log("From safe directive")
    }

    onConfirmLeavePage(event: MouseEvent){
        const wantToLeave = window.confirm('Do you want to leave the app');

        if (wantToLeave) {
            // const address = (event.target as HTMLAnchorElement).href;
            // (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
            const address = this.hosteElementRef.nativeElement.href;
            this.hosteElementRef.nativeElement.href = address + '?from=' + this.queryParam();
            return;
        }

        event.preventDefault();
    }
}