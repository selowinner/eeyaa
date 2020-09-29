import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {
  isCollapsed = false;
  redicteLogin = '/auth/';
  // tslint:disable-next-line:max-line-length
  menu: ({ routerLink: string; children: Array<{ routerLink: string; icon: string; label: string }>; icon: string; label: string } | { routerLink: string; children: ({ routerLink: string; icon: string; label: string })[]; icon: string; label: string } | { routerLink: string; children: ({ routerLink: string; icon: string; label: string; child: { routerLink: string; icon: string; label: string }[] })[]; icon: string; label: string })[];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    this.menu = [
      {
        label: 'Réclamation',
        icon: 'dashboard',
        routerLink: '',
        children: [
          {
            label: 'Liste des reclamations',
            icon: 'dashboard',
            routerLink: '/reclamations/list-reclamation',
          },
          {
            label: 'Saisir une reclamation',
            icon: 'dashboard',
            routerLink: '/reclamations/new-reclamation',
          },
          {
            label: 'Envoyer un mail',
            icon: 'dashboard',
            routerLink: '/reclamations/send-mail/',
          },
        ]
      },
      {
        label: 'Declarations (échec)',
        icon: 'dashboard',
        routerLink: '',
        children: [
          {
            label: 'Liste des declarations',
            icon: 'dashboard',
            routerLink: '/declarations/list-declarations',
          },

        ]
      },
      {
        label: 'Referentiels',
        icon: 'dashboard',
        routerLink: '',
        children: [
          {
            label: 'Pays',
            icon: 'dashboard',
            routerLink: '#',
            child: [
              {
                label: 'Liste des pays',
                icon: 'dashboard',
                routerLink: '/referentials/countries/list-countries/',
              }, {
                label: 'Ajouter des pays',
                icon: 'dashboard',
                routerLink: '/referentials/countries/new-countries/',
              },
            ]
          },
          {
            label: 'Villes',
            icon: 'dashboard',
            routerLink: '#',
            child: [
              {
                label: 'Liste des villes',
                icon: 'dashboard',
                routerLink: '/referentials/cities/list-cities/',
              },
              {
                label: 'Ajouter des villes',
                icon: 'dashboard',
                routerLink: '/referentials/cities/new-cities/',
              },
            ]
          },
          {
            label: 'Professions',
            icon: 'dashboard',
            routerLink: '#',
            child: [
              {
                label: 'Liste des professions',
                icon: 'dashboard',
                routerLink: '/referentials/professions/list-professions/',
              },
              {
                label: 'Ajouter des professions',
                icon: 'dashboard',
                routerLink: '/referentials/professions/new-professions/',
              },
            ]
          },
          {
            label: 'Civilités',
            icon: 'dashboard',
            routerLink: '#',
            child: [
              {
                label: 'Liste des civilités',
                icon: 'dashboard',
                routerLink: '/referentials/civilities/list-civilities/',
              },
            ]
          },
          {
            label: 'Compagnies',
            icon: 'dashboard',
            routerLink: '#',
            child: [
              {
                label: 'Liste des compagnies',
                icon: 'dashboard',
                routerLink: '/referentials/compagnies/list-compagnies/',
              },
              {
                label: 'Ajouter des compagnies',
                icon: 'dashboard',
                routerLink: '/referentials/compagnies/new-compagnies/',
              },
            ]
          },
          {
            label: 'Types pieces',
            icon: 'dashboard',
            routerLink: '#',
            child: [
              {
                label: 'Liste des types pieces',
                icon: 'dashboard',
                routerLink: '/referentials/types-pieces/list-types-pieces/',
              },
              {
                label: 'Ajouter des types pieces',
                icon: 'dashboard',
                routerLink: '/referentials/types-pieces/new-type-pieces/',
              },
            ]
          },
          {
            label: 'Configuration syteme',
            icon: 'dashboard',
            routerLink: '#',
            child: [
              {
                label: 'Constante systèms',
                icon: 'dashboard',
                routerLink: '/referentials/config-systems/edit-constantes/',
                // routerLink: '#',
              },
              {
                label: 'Systeme de messagerie',
                icon: 'dashboard',
                routerLink: '/referentials/config-systems/edit-system-messagerie/',
                // routerLink: '#',
              },
            ]
          },

        ]
      },

    ];

  }

  redicteToLogin(): void {
    window.location.href = this.redicteLogin;
  }
}
