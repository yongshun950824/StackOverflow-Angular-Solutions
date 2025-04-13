import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css'],
})
export class SkillFormComponent implements OnInit {
  skillList = [
    { skillId: '0', skillName: 'JS' },
    { skillId: '1', skillName: 'TS' },
    { skillId: '2', skillName: 'JAVA' },
    { skillId: '3', skillName: '.Net' },
  ];

  @ViewChild('pickAllCourse') private pickAllCourse: MatOption;
  trainerForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.trainerForm = this.formBuilder.group({
      selectedSkills: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  pickAll(): void {
    if (this.pickAllCourse.selected) {
      this.trainerForm.controls.selectedSkills.patchValue([
        ...this.skillList.map((item) => {
          return {
            skillId: item.skillId,
          };
        }),
        0,
      ]);
    } else {
      this.trainerForm.controls.selectedSkills.patchValue([]);
    }
  }

  selectOneItem(all): any {
    if (this.pickAllCourse.selected) {
      this.pickAllCourse.deselect();
      return false;
    }
    if (
      this.trainerForm.controls.selectedSkills.value.length ===
      this.skillList.length
    ) {
      this.pickAllCourse.select();
    }
  }

  onSubmit(): void {
    console.log('form value', this.trainerForm.value);

    let postFormValue: any = {
      ...this.trainerForm.value,
      selectedSkills: this.trainerForm.value.selectedSkills.filter(
        (x: any) => typeof x === 'object'
      ),
    };

    console.log(postFormValue);
  }

  compareFn(obj1: any, obj2: any): boolean {
    return obj1 && obj2 ? obj1.skillId === obj2.skillId : obj1 === obj2;
  }
}
