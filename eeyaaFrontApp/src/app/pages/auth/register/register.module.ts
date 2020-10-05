import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClientComponent} from "./client/client.component";
import {CreatifComponent} from "./creatif/creatif.component";
import {RouterModule} from "@angular/router";
import {RegisterRootingModule} from "src/app/pages/auth/register/register-rooting.module";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [ClientComponent, CreatifComponent],
  imports: [
    CommonModule,
    RouterModule,
    RegisterRootingModule,
    NzSpaceModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class RegisterModule {
}
