import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import {NzLayoutModule} from 'ng-zorro-antd';


@NgModule({
  imports: [WelcomeRoutingModule, NzLayoutModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
