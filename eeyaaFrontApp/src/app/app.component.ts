import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  menu: { routerLink: string; children: { routerLink: string; icon: string; label: string }[]; icon: string; label: string }[];
  redicteLogin = '/auth/';


  ngOnInit(): void {

    this.menu = [
      {
        label: 'Declarations',
        icon: 'dashboard',
        routerLink: '',
        children: [
          {
            label: 'Liste des declarations',
            icon: 'dashboard',
            routerLink: '/declarations/list-declaration',
          },
          {
            label: 'Nouvelle declaration',
            icon: 'dashboard',
            routerLink: '/declarations/new-declaration',
          },

        ]
      }
    ];

  }


}
