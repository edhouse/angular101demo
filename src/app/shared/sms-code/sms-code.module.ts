import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsCodePipe } from './sms-code.pipe';
import { SmsCodeDirective } from './sms-code.directive';

@NgModule({
  declarations: [
    SmsCodePipe,
    SmsCodeDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SmsCodePipe,
    SmsCodeDirective,
  ]
})
export class SmsCodeModule { }
