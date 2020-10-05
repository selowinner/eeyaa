import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IconsProviderModule} from './icons-provider.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {fr_FR, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import fr from '@angular/common/locales/fr';
import {ErrorInterceptor} from './core/helpers/error.interceptor';
import {JwtInterceptor} from './core/helpers/jwt.interceptor';
import {AuthModule} from './pages/auth/auth.module';
import {LayoutsModule} from './layouts/layouts.module';
import {NgZorroAntdModule, NzIconModule} from 'ng-zorro-antd';
import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {NzSpaceModule} from "ng-zorro-antd/space";

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule,
    LayoutsModule,
    NgZorroAntdModule,
    NzIconModule,
    NzSpaceModule,

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: NZ_I18N, useValue: fr_FR}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
