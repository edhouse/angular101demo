import { Directive, OnInit, ElementRef, HostListener } from '@angular/core';

import { SmsCodePipe } from './sms-code.pipe';

@Directive({
  selector: '[appSmsCode]',
  providers: [SmsCodePipe]
})
export class SmsCodeDirective implements OnInit {

  private el: HTMLInputElement;

  constructor(private elementRef: ElementRef, private smsCodePipe: SmsCodePipe) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.el.value = this.smsCodePipe.transform(this.el.value);
  }

  @HostListener('keyup', ['$event.target.value'])
  onKeyUp(value) {
    this.el.value = this.smsCodePipe.transform(value);
  }
}
