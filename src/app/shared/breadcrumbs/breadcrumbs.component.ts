import { Component, OnDestroy, inject } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: ``,
})
export class BreadcrumbsComponent implements OnDestroy {
  public title!: string;
  public titleSub$!: Subscription;

  constructor(private router: Router) {
    this.titleSub$ = this.getArgsOfRoute().subscribe(({ title }) => {
      this.title = title;
      document.title = `AdminPro - ${title}`;
    });
  }

  public getArgsOfRoute() {
    return this.router.events.pipe(
      filter((e) => e instanceof ActivationEnd && e.snapshot.data['title']),
      map((e) => {
        const event = e as ActivationEnd;
        return event.snapshot.data;
      })
    );
  }

  ngOnDestroy(): void {
    this.titleSub$.unsubscribe();
  }
}
