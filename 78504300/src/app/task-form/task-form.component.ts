import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inject, Optional } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatOption } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TitleCasePipe } from '@angular/common';
import { MatSelect } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Task } from '../../app/task';
import { ChipFieldComponent } from '../chip-field/chip-field.component';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    ChipFieldComponent,
    CommonModule,
    MatButtonModule,
    MatCheckbox,
    MatError,
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    TitleCasePipe,
    MatSelect,
    MatOption,
    MatRadioGroup,
    MatRadioButton,
    MatDialogModule,
    MatIconModule,
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  protected readonly Object = Object;
  taskForm!: FormGroup;
  fromPopup = false;
  keywords!: string[];
  @ViewChild(ChipFieldComponent) chipFieldComponent!: ChipFieldComponent;
  constructor(
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: { fromPopup: boolean; task: Task }
  ) {}

  ngOnInit() {
    this.keywords = [];
    this.fromPopup = !!this.data?.fromPopup;
    this.taskForm = new FormGroup({
      title: new FormControl(''),
      subTasks: new FormControl(''),
    });

    if (this.data?.task) {
      this.taskForm.setValue({
        title: this.data.task.title,
        subTasks: this.data.task.subtasks.map((x) => x.id),
      });
    }
  }

  public get subTasksFormControl() {
    return this.taskForm.get('subTasks') as FormControl;
  }

  public onSubmit() {
    console.log('Submitted');
  }
}
