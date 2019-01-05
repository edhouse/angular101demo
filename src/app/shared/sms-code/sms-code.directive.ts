import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { isUndefined } from 'util';

@Directive({
  selector: '[appSmsCode]'
})
export class SmsCodeDirective implements OnInit {

  private el: HTMLInputElement;

  private static transform(value: string): string {
    return isUndefined(value) ? value : value.toUpperCase();
  }

  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.el.value = SmsCodeDirective.transform(this.el.value);
  }

  @HostListener('keyup', ['$event.target.value'])
  onKeyUp(value) {
    this.el.value = SmsCodeDirective.transform(value);
  }
}
