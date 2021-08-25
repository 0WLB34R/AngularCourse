import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure',
  pure:true
})
export class PurePipe implements PipeTransform {

  transform(value: number[]): any {
    console.log()
    return value.filter(s => s%2 ===0);
  }

}