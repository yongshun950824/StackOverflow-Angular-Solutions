import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  template:
  `
    <form [formGroup]="form" novalidate>
      <div>
        <label >Name</label>
        <app-textbox formControlName="name"></app-textbox>
      </div>
    </form>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  /**
   *
   */
  constructor(private formBuilder:FormBuilder) {
  }

  form = this.formBuilder.group({
    name:['', Validators.required]
  })

  model:NameModel = {
    name:'test'
  }

  ngOnInit(): void {
    this.form.get('name').setValue(this.model.name);
  }
}

interface NameModel{
  name:string;
}