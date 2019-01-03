import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { SmsComponent } from './sms/sms.component';
import { SmsCodeDirective } from './sms/sms-code.directive';
import { SmsCodePipe } from './sms/sms-code.pipe';
import { MaterialModule } from '../shared/material.module';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    LoginComponent,
    SmsComponent,
    SmsCodeDirective,
    SmsCodePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [
    AuthService
  ],
  exports: [
    LoginComponent,
    SmsComponent,
  ]
})
export class AuthModule {
}
