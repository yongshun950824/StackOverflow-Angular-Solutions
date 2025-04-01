import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { FormatNumPipe } from './format-num.pipe';
import { FormatDatePipePipe } from './format-date-pipe.pipe';
import { PositiveNegativeColorClassPipe } from './positive-negative-color-class.pipe';
import { MathAbsPipe } from './math-abs.pipe';



@NgModule({
  declarations: [
    FormatNumPipe,
    FormatDatePipePipe,
    PositiveNegativeColorClassPipe,
    MathAbsPipe,
  ],
  imports: [
    CommonModule
  ],

  providers: [
    DecimalPipe,
    DatePipe,
    
  ],
  exports: [
    FormatNumPipe,
    FormatDatePipePipe,
    PositiveNegativeColorClassPipe,
    MathAbsPipe,
    
  ],

})
export class PipesModule { }
