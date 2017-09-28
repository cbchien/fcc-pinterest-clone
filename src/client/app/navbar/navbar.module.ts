import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
  ],

  declarations: [
    NavbarComponent,
  ],

  exports: [
    NavbarComponent,
  ],
})
export class NavbarModule {
}