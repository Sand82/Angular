import { Observable } from "rxjs";
import { Course } from "../model/course";

export function createHttpObservable(url: string): Observable<Course[]> {
  const observable$: Observable<Course[]> = new Observable((observer) => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        observer.next(body);
        observer.complete();
      })
      .catch((err) => {
        observer.error(err);
      });
  });

  return observable$;
}
