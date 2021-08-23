import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tOF'
})
export class TOFPipe implements PipeTransform {

  transform(value: boolean): string {
    let ans = 'NO';
    if(value){
      ans = 'YES';
    }
    
    return ans;
  }

}