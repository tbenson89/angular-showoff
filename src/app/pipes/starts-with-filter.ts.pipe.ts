import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startsWithFilterPipe'
})
export class StartsWithFilterTsPipe implements PipeTransform {

  transform(values: string[], startString: string = ''): string[] {
    // Filter out elements from an array that DO NOT match using a string == 'startString
    // Throws ERR: when returning NEW arr[]
    let filteredArray = values.filter(value => value.startsWith(startString));
    return filteredArray;
  }

}
