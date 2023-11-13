import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: `./progress.component.css`,
})
export class ProgressComponent {
  public progress1: number = 40;
  public progress2: number = 50;
}
