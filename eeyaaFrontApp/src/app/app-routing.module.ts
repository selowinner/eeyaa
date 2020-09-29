import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutsComponent} from './layouts/layouts.component';

const routes: Routes = [
/*  {
    path: '',
    component: LayoutsComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: '/welcome'},
    ]
  },*/
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
