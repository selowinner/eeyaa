import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutsComponent} from './layouts.component';
import {RouterModule} from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';


@NgModule({
  declarations: [LayoutsComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule,
  ]
})
export class LayoutsModule {
}
