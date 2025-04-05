import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  formGroup: FormGroup;
  minDate = new Date();
  yearRange = "2022:2028";
  isReadyOnlyForm (){
    
  }

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.formGroup= this.fb.group({
      tempoAdeguamento: []
    });
  }

  setDate(event, formControlName) {
    console.log(event)
    this.formGroup.controls[formControlName].patchValue(event);
  }
}
