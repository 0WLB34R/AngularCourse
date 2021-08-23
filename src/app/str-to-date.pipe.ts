import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'strToDate'
})
export class StrToDatePipe implements PipeTransform {

  transform(value: string): Date {
    let newDate = new Date(value.slice(0,-10));
    return newDate;
  }

}