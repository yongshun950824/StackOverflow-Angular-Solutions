import { Component, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: [null, [Validators.required]],
      details: this.fb.array([], Validators.required),
    });

    this.fetchData();
  }

  get detailsArr() {
    return this.myForm.get('details') as FormArray;
  }

  addDetailFormGroup(detail: any) {
    this.detailsArr.push(
      this.fb.group({
        detailName: detail.detailName,
        detailValue: detail.detailValue,
      })
    );
  }

  fetchData() {
    this.dataService.getData().subscribe((res) => {
      // Propagate details
      for (let detail of res.details) {
        this.addDetailFormGroup(detail);
      }


      // Propagate name
      this.myForm.patchValue({
        name: res.name,
      });
    });
  }
}
