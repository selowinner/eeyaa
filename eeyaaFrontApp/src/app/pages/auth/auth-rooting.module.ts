import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {path: "register", loadChildren: () => import("./register/register.module").then(m => m.RegisterModule)},
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class AuthRootingModule {

}
