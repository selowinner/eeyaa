import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClientComponent} from "./client/client.component";
import {CreatifComponent} from "./creatif/creatif.component";
import {RouterModule} from "@angular/router";
import {RegisterRootingModule} from "src/app/pages/auth/register/register-rooting.module";


@NgModule({
  declarations: [ClientComponent, CreatifComponent],
  imports: [
    CommonModule,
    RouterModule,
    RegisterRootingModule,
  ],
})
export class RegisterModule {
}
