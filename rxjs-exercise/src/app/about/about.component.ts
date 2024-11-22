import { Component, OnInit } from "@angular/core";
import { concat, of } from "rxjs";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

////////////////////////////
//OPSERVABLES CONCATENATION
///////////////////////////

// ngOnInit(): void {
//   const sourse1$ = of(1, 2, 3);
//   const sourse2$ = of(4, 5, 6);
//   const sourse3$ = of(7, 8, 9);

//   const result$ = concat(sourse1$, sourse2$, sourse3$);

//   result$.subscribe((res) => console.log(res));
// }

////////////////////////
//INTRODUCE PIPE AND MAP
///////////////////////

// ngOnInit(): void {
//   const http$ = createHttpObservable("api/courses");
//   const courses$ = http$.pipe(map((res) => Object.values(res["payload"])));
//   courses$.subscribe((res) => console.log(res));
// }

///////////////////
//CUSTOM OBSERVABLE
///////////////////

// ngOnInit() {
//   const observable$ = new Observable((observer) => {
//     fetch("api/courses")
//       .then((res) => {
//         return res.json();
//       })
//       .then((body) => {
//         observer.next(body);
//         observer.complete();
//       })
//       .catch((err) => {
//         observer.error(err);
//       });
//   });

//   observable$.subscribe((cources) => {
//     console.log(cources);
//   });
// }

///////////////////
//RxJs OBSERVABLE
///////////////////

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

///////////////////
//STREAMS OF VALUES
///////////////////

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
