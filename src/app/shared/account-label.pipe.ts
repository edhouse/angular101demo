import {Pipe, PipeTransform} from '@angular/core';
import {Account} from './domain/account';
import {isUndefined} from 'util';

@Pipe({
  name: 'accountLabel'
})
export class AccountLabelPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (isUndefined(value.number)) {
      return value;
    }
    return value.number + ' - ' + value.name + ' (' + value.currency + ')';
  }

}
