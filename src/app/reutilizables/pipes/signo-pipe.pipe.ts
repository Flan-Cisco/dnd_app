import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'signoPipe'
})
export class SignoPipePipe implements PipeTransform {

  transform(str: number, ...args: any): any {
    const value = String(str);
    return value.charAt(0) === '-' ?
      '(-'+ value.substring(1,value.length) + ')': '(+' + value + ')';
  }

}
