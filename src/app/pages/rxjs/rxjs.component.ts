import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css',
})
export class RxjsComponent implements OnInit, OnDestroy {
  private _intervalSubs!: Subscription;

  ngOnInit(): void {
    this._intervalSubs = this.returnInterval().subscribe((valor) =>
      console.log('Subs:', valor)
    );
  }

  ngOnDestroy(): void {
    this._intervalSubs.unsubscribe();
  }

  private returnInterval(): Observable<number> {
    return interval(100).pipe(
      map((valor) => valor + 1),
      filter((valor) => valor % 2 === 0)
    );
  }

  private returnObservable(): Observable<number> {
    let i = 0;
    const obs$ = new Observable<number>((observer) => {
      setInterval(() => {
        ++i;
        observer.next(i);
        if (i == 10) observer.complete();
      }, 1000);
    });
    return obs$;
  }
}
