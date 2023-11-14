import { Component, inject } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {
  private sidebarService = inject(SidebarService);

  public menuItems;

  constructor() {
    this.menuItems = this.sidebarService.menu;
  }
}
