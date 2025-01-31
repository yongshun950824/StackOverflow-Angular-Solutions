import { Directive } from '@angular/core';
import { PgcTypoDirective } from './pgc-typo.directive';

@Directive({
  selector: '[heading-1]',
  standalone: true,
  hostDirectives: [
    {
      directive: PgcTypoDirective,
      // With alias
      inputs: ['pgc-typo: heading-1'],
      // Without alias
      //inputs: ['pgc-typo'],
    },
  ],
})
export class Heading1Directive {}
