import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: `./contact.component.html`,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  userform: FormGroup;
  editUserForm;
  FormGroup;
  listdata: any;
  index: any;
  itemobj: any;

  constructor(private route: Router, private formbuilder: FormBuilder) {
    this.listdata = [];
    this.userform = this.formbuilder.group({
      name: ['', Validators.required],
      Phone: ['', Validators.required]
    });

    this.editUserForm = this.formbuilder.group({
      name: ['', Validators.required],
      Phone: ['', Validators.required]
    });
  }

  submit(): void {
    this.listdata.push(this.userform.value);
    this.userform.reset();
  }

  update(): void {
    let user = this.editUserForm.value;

    this.listdata[this.index] = user;
    this.editUserForm.reset();
  }

  edit(item: any): void {
    this.editUserForm.patchValue({
      // name:this.userform.get("name")?.value,
      // Phone:this.userform.get("Phone")?.value
      name: item.name,
      Phone: item.Phone
    });
    this.itemobj = item;
    this.index = this.listdata.indexOf(item);
  }

  removeitem(element: any) {
    this.listdata.forEach((value: any, index: any) => {
      if (value == element) this.listdata.splice(index, 1);
    });
  }

  ngOnInit(): void {}
}
