import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsCodeDirective } from './sms-code.directive';

@NgModule({
  declarations: [
    SmsCodeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SmsCodeDirective
  ]
})
export class SmsCodeModule { }
