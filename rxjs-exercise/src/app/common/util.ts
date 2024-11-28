import { Observable } from "rxjs";
import { Course } from "../model/course";
import { response } from "express";

export function createHttpObservable(url: string): Observable<any> {
  return new Observable((observer) => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, { signal })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          observer.error("Request failed with status code: " + res.status);
        }
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
