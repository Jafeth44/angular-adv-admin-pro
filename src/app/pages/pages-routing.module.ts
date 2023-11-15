import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphComponent } from './graph/graph.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {title: 'Dashboard'},
      },
      {
        path: 'graph',
        component: GraphComponent,
        data: {title: 'Graph'},
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: {title: 'Progress'},
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        data: {title: 'Account Settings'},
      },
      {
        path: 'promises',
        component: PromisesComponent,
        data: {title: 'Promises'},
      },
      {
        path: 'rxjs',
        component: RxjsComponent,
        data: {title: 'RxJs'},
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
