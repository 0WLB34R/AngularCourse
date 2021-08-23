import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolToYN'
})
export class BoolToYNPipe implements PipeTransform {

  transform(value: boolean, ): string {
    let ans = 'NO'
    if(value){
      ans = 'YES'
    }
    return ans;
  }

}