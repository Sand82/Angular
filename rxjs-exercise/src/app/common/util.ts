import { Observable } from "rxjs";
import { Course } from "../model/course";

export function createHttpObservable(url: string): Observable<any> {
  return new Observable((observer) => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, { signal })
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
    return () => controller.abort();
  });
}
