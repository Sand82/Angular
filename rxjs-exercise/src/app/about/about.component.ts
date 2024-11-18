import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { fromEvent, interval, timer } from "rxjs";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // RxJs OBSERVABLE
  // ngOnInit() {
  //   const interval$ = interval(1000);
  //   interval$.subscribe((val) => console.log("stream 1 " + val));
  //   interval$.subscribe((val) => console.log("stream 2 " + val));

  //   const timer$ = timer(3000, 1000);
  //   const sub = timer$.subscribe((val) => console.log("for timer " + val));

  //   setTimeout(() => {
  //     sub.unsubscribe();
  //   }, 5000);

  //   const click$ = fromEvent(document, "click");

  //   click$.subscribe(
  //     (eve) => console.log(eve),
  //     (err) => console.log(err),
  //     () => console.log("complete")
  //   );
  // }

  // STREAMS OF VALUES

  // ngOnInit() {
  //

  //   document.addEventListener("click", (event) => {
  //     console.log(event);
  //   });

  //   let count = 0;

  //   setInterval(() => {
  //     console.log(count);
  //     count++;
  //   }, 1000);

  //   setTimeout(() => {
  //     console.log("finished...");
  //   }, 3000);

  //   //CALLBACK HELL
  //   document.addEventListener("click", (event) => {
  //     console.log(event);

  //     setTimeout(() => {
  //       console.log("finished...");

  //       setInterval(() => {
  //         console.log(count);
  //         count++;
  //       }, 1000);
  //     }, 3000);
  //   });
  // }
}
