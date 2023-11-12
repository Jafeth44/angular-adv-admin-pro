import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent {
  public year = new Date().getFullYear();
}
