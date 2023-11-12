import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphComponent } from './graph/graph.component';
import { ProgressComponent } from './progress/progress.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'graph',
        component: GraphComponent
      },
      {
        path: 'progress',
        component: ProgressComponent
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}