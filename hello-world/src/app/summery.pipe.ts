import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summery',
})
export class SummeryPipe implements PipeTransform {
  transform(value: string, limit?: number) {
    if (!value) {
      return null;
    }

    let actualValue = limit ? limit : 15;
    return value.substring(0, actualValue) + '...';
  }
}
