import { Component } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { Inject, Optional } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatOption } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TitleCasePipe } from '@angular/common';
import { MatSelect } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Task } from '../../app/task';
import { Subtask } from '../subtask';
import * as _ from 'lodash';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
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
    JsonPipe,
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  protected readonly Object = Object;
  taskForm!: FormGroup;
  fromPopup = false;
  subtasks: Subtask[] = [];
  constructor(
    private fb: FormBuilder,
    @Optional() private dialogRef: MatDialogRef<TaskFormComponent>,
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: { fromPopup: boolean; task: Task }
  ) {
    if (!this.data) {
      this.data = {
        fromPopup: true,
        task: {
          id: 1,
          title: '',
          subtasks: [],
        },
      };
    }
  }

  ngOnInit() {
    this.fromPopup = !!this.data?.fromPopup;

    this.taskForm = this.fb.group({
      id: this.data?.task?.id,
      title: new FormControl(''),
      subtasks: new FormControl(''),
    });

    if (this.data?.task) {
      this.taskForm.patchValue({
        id: this.data.task?.id,
        title: this.data.task.title,
      });
      this.subtasks = _.cloneDeep(this.data.task.subtasks);
    }
  }

  public get subtasksFormControl() {
    return this.taskForm.get('subtasks') as FormControl;
  }

  public addSubtask() {
    const subtask = this.taskForm.get('subtasks')?.value;
    if (subtask.trim()) {
      this.subtasks.push({
        id: undefined,
        taskId: 1,
        description: subtask,
        isDone: false,
        isEditable: false,
      } as Subtask);

      this.subtasksFormControl.setValue(this.subtasks);
    }
    this.clearSubtask();
  }

  public clearSubtask() {
    this.taskForm.patchValue({ subtasks: '' });
  }

  public editSubtask(index: number) {
    this.subtasks[index].isEditable = true;
  }

  public saveSubtask(index: number, subtask: Subtask) {
    this.subtasks[index].isEditable = false;
    this.subtasks[index] = subtask;
  }

  public deleteSubtask(index: number) {
    this.subtasks.splice(index, 1);
    this.data.task.subtasks.splice(index, 1);
  }

  public onSubmit() {
    if (this.data?.task) {
      const taskRawValue = {
        ...this.taskForm.getRawValue(),
        subtasks: this.subtasks.map((x, i) =>
          x.isEditable ? (this.data.task.subtasks.at(i) ?? x) : x
        ),
      };

      this.onUpdateTask();
    } else {
    }
    this.onReset();
  }

  public onUpdateTask() {
    const taskRawValue = {
      ...this.taskForm.getRawValue(),
      subtasks: this.subtasks.map((x, i) =>
        x.isEditable ? (this.data.task.subtasks.at(i) ?? x) : x
      ),
    };
    if (this.fromPopup) {
      this.dialogRef.close(taskRawValue);
    } else {
    }
  }

  public onReset() {
    this.taskForm.reset();
    this.subtasks = [];
  }
}
