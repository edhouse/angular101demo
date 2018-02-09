import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined } from 'util';

@Pipe({
  name: 'smsCode'
})
export class SmsCodePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return isUndefined(value) ? value : value.toUpperCase();
  }

}
