import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthRootingModule} from './auth-rooting.module';
import {NgZorroAntdModule, NzButtonModule, NzFormModule, NzGridModule, NzIconModule, NzInputModule, NzLayoutModule} from 'ng-zorro-antd';
import {NzSpaceModule} from 'ng-zorro-antd/space';


@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRootingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzGridModule,
    NzInputModule,
    NzButtonModule,
    NzFormModule,
    NgZorroAntdModule,
    NzIconModule,
    NzSpaceModule
  ]
})
export class AuthModule {
}
