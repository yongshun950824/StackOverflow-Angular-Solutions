import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css'],
})
export class UpdateFormComponent implements OnInit {
  myForm: FormGroup;
  myPost: any;
  id = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myPost = this.displayPost(this.id);

    this.myForm = this.fb.group({
      name: this.myPost.name,
      surname: this.myPost.surname,
      birthday: this.myPost.birthday,
      address: this.fb.array([]),
    });

    for (let address of this.myPost.address) {
      this.addAddressForm(address);
    }
  }

  addAddressForm(address) {
    const lessonForm = this.fb.group({
      id: [''],
      type: [''],
      rue: [''],
      numero: [''],
      ville: [''],
      codepst: [''],
      pays: [''],
      commentaire: [''],
    });

    lessonForm.patchValue(address);
    this.addresses.push(lessonForm);
  }

  displayPost(id) {
    return {
      id: 2,
      name: 'John',
      surname: 'Smith',
      birthday: '12/08/93',
      address: [
        {
          id: '2',
          type: '2',
          rue: '2',
          numero: '2',
          ville: '2',
          codepst: '2',
          pays: '2',
          commentaire: '2',
        },
        {
          id: '3',
          type: '3',
          rue: '3',
          numero: '3',
          ville: '3',
          codepst: '3',
          pays: '3',
          commentaire: '3',
        },
      ],
    };
  }

  get addresses() {
    return this.myForm.controls['address'] as FormArray;
  }
}
