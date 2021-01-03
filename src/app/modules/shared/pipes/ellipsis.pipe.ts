import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
})
export class EllipsisPipe implements PipeTransform {
  transform(value: string): string {
    return value.length < 150 ? value : value.slice(0, 150) + '...';
  }
}
