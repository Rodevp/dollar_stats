import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateDollar'
})
export class CalculateDollarPipe implements PipeTransform {

  transform(value: string): string {

    const getValueStorage = localStorage.getItem('dollar') ?? '0'

    const parseValue = getValueStorage.replace('.', '')
    const result = Number( Number(parseValue) * Number(value) ).toString()

    return result

  }

}
