import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphComponent } from './graph/graph.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    DashboardComponent,
    GraphComponent,
    LayoutComponent,
    ProgressComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterOutlet,
    PagesRoutingModule,
  ],
  exports: [
    DashboardComponent,
    GraphComponent,
    LayoutComponent,
    ProgressComponent,
  ]
})
export class PagesModule { }
