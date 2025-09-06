import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pascalCaseToSentence',
})
export class PascalCaseToSentencePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }
    return value.replace(/([A-Z])/g, ' $1').trim();
  }
}
