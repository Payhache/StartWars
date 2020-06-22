import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter'
})
export class FirstLetterPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    const arrayName = value.split(' ');
    console.log(arrayName);
    
    return arrayName[0][0] + arrayName[1][0];
  }

}

