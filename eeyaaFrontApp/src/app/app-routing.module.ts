import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from "./pages/welcome/welcome.component";

const routes: Routes = [
  /*  {
      path: '',
      component: LayoutsComponent,
      children: [
        {path: '', pathMatch: 'full', redirectTo: '/welcome'},
      ]
    },*/
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
