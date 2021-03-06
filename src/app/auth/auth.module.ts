import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { SmsComponent } from './sms/sms.component';
import { MaterialModule } from '../shared/material.module';
import { SmsCodeModule } from '../shared/sms-code/sms-code.module';

@NgModule({
  declarations: [
    LoginComponent,
    SmsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SmsCodeModule,
  ],
  exports: [
    LoginComponent,
    SmsComponent,
  ]
})
export class AuthModule {
}
