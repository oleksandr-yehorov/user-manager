import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appFilter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any, value: string): any {
    if (!value) {
      return  items;
    } else {
      return items.filter((i) => {
        return i.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      });
    }
  }
}
