import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphComponent } from './graph/graph.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent,
    GraphComponent,
    LayoutComponent,
    NotFoundPageComponent,
    ProgressComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterOutlet,
  ],
  exports: [
    DashboardComponent,
    GraphComponent,
    LayoutComponent,
    NotFoundPageComponent,
    ProgressComponent,
  ]
})
export class PagesModule { }
