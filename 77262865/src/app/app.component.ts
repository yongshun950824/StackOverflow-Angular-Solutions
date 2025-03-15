import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  public demoForm: FormGroup;

  uploadDoc = [
    {
      id: 1,
      picType: 'Food',
      title: 'Apple ',
    },
    {
      id: 2,
      picType: 'Food',
      title: 'orange',
    },
    {
      id: 3,
      picType: 'Colour',
      title: 'Black',
    },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.demoForm = this.formBuilder.group({
      text_input: ['', Validators.required],
      photos: this.formBuilder.array([]),
    });

    for (let doc of this.uploadDoc) {
      (this.demoForm.controls.photos as FormArray).push(
        this.createNestedPhotoForm(doc.title)
      );
    }
  }

  // We will create multiple form controls inside defined form controls photos.
  createItem(data): FormGroup {
    return this.formBuilder.group(data);
  }

  //Help to get all photos controls as form array.
  get photos(): FormArray {
    //console.log(this.demoForm);
    return this.demoForm.get('photos') as FormArray;
  }

  photoCategoryPhotos(photosRootIndex: number): FormArray {
    return (this.photos.controls[photosRootIndex] as FormGroup).controls
      .photos as FormArray;
  }

  createNestedPhotoForm(title: string): FormGroup {
    let photoCategoryForm = this.formBuilder.group({
      title: [title],
      photos: this.formBuilder.array([]),
    });

    return photoCategoryForm;
  }

  detectFiles(event, photosRootIndex) {
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          console.log('e.target.result', e.target.result);
          this.photoCategoryPhotos(photosRootIndex).push(
            this.createItem({
              file,
              url: e.target.result, //Base64 string for preview image
            })
          );
        };
        reader.readAsDataURL(file);
      }
    }
  }

  removePhoto(photosRootIndex, photosChildIndex) {
    this.photoCategoryPhotos(photosRootIndex).removeAt(photosRootIndex);
  }

  onSubmit() {
    
  }
}

// angular form is group of controls
