import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ClientComponent} from "src/app/pages/auth/register/client/client.component";
import {CreatifComponent} from "src/app/pages/auth/register/creatif/creatif.component";

const routes: Routes = [
  {
    path: "client",
    component: ClientComponent,
  },
  {
    path: "provider",
    component: CreatifComponent,
  },

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class RegisterRootingModule {
}
