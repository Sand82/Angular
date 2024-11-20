import { Observable } from "rxjs";

export function createHttpObservable(url: string): Observable<any> {
  const observable$ = new Observable((observer) => {
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
