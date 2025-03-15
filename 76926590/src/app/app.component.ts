import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'nz-demo-switch-basic',
  template: ` <form [formGroup]="businessFoodHygieneForm">
  <div class="box p-4 d-flex jc-between ai-center">
     <span>
        Food Hygiene Link
     </span>
     <label>
      <nz-switch
      class="switch-middle ms-2"
      formControlName="foodHygieneLink"
      (ngModelChange)="onFoodHygieneChange($event)">
      </nz-switch>
  </label>
 </div>
</form> `,
})
export class NzDemoSwitchBasicComponent {
  //foodHygieneLink = new FormControl('')
  foodHygieneLink: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  businessFoodHygieneForm!: FormGroup;

  businessData: Observable<any> = of({
    foodHygieneLink: 'No',
  });

  ngOnInit() {
    this.initializeBusinessFoodHygieneForm();
    this.setBusinessFoodHygieneForm();
  }

  initializeBusinessFoodHygieneForm(): void {
    this.businessFoodHygieneForm = this.formBuilder.group({
      foodHygieneLink: new FormControl(),
    });
  }

  setBusinessFoodHygieneForm(): void {
    this.businessData.subscribe((selectedBusiness) => {
      if (selectedBusiness) {
        this.businessFoodHygieneForm.patchValue({
          foodHygieneLink:
            selectedBusiness?.foodHygieneLink === 'Yes',
        });
      }
    });
  }

  onFoodHygieneChange(status: boolean): void {
    this.foodHygieneLink = status;
    //this.foodHygieneLink.patchValue(status.toString());

    const body = { foodHygieneLink: status ? 'Yes' : 'No' };
    console.log(body);

    // this.bizStore.dispatch(
    //    businessAction.updateBusiness({
    //       body: body,
    //       bid: this.bid,
    //    })
    //  );
  }
}
