import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AuthComponent} from "./auth.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthRootingModule} from "./auth-rooting.module";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {RegisterModule} from "src/app/pages/auth/register/register.module";
import {NzSpaceModule} from "ng-zorro-antd/space";


@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRootingModule,
    RegisterModule,
    RouterModule,
    FormsModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    NzSpaceModule,
  ],
})
export class AuthModule {
}
