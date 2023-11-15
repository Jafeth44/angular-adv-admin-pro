import { Component, inject } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
declare function customInitFunction(): void;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent {

  private settingsService = inject(SettingsService);

  public year = new Date().getFullYear();


  constructor() {
    customInitFunction();
  }
}
