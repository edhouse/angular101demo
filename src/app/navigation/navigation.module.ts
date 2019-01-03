import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './navigation.component';
import { MaterialModule } from '../shared/material.module';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    LogoComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule {
}
