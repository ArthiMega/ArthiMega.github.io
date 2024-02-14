import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone:true,
  name: 'powerCalculation'
})
export class PowerCalculationPipe implements PipeTransform {

  transform(value: number, exponent: number = 1): number {
    return Math.pow(value, exponent);
  }

}
