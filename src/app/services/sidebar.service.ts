import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {title: 'Main', url: '/dashboard'},
        {title: 'Progress Bar', url: '/dashboard/progress'},
        {title: 'Graphs', url: '/dashboard/graph'},
      ]
    }
  ]
  constructor() { }
}
