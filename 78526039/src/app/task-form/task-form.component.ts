import { Component, ViewChild } from '@angular/core';
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
  FormBuilder,
  FormControl,
  FormGroup,
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
import { ChipFieldComponent } from '../chip-field/chip-field.component';
import { Contact } from '../contact';
import { TASK_STATUSES } from '../status';

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
    JsonPipe
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  protected readonly Object = Object;
  taskForm!: FormGroup;
  fromPopup = false;
  keywords!: string[];
  contacts: Contact[] = [
    {
      id: 1,
      email: 'john@doe.de',
      name: 'John Doe',
    },
    {
      id: 2,
      email: 'jane@doe.de',
      name: 'Jane Doe',
    },
    {
      id: 3,
      email: 'max@max.de',
      name: 'Max Max',
    },
    {
      id: 4,
      email: 'anna@anna.de',
      name: 'Anna Anna',
    },
  ];
  @ViewChild(ChipFieldComponent) chipFieldComponent!: ChipFieldComponent;
  constructor(
    private fb: FormBuilder,
    @Optional() private dialogRef: MatDialogRef<TaskFormComponent>,
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: { fromPopup: boolean; task: Task }
  ) {}

  ngOnInit() {
    this.keywords = [];
    this.fromPopup = !!this.data?.fromPopup;

    this.taskForm = this.fb.group({
      id: this.data?.task?.id,
      title: new FormControl(''),
      subTasks: new FormControl([]),
      contacts: new FormControl([]),
      status: TASK_STATUSES[0],
    });

    if (this.data?.task) {
      this.taskForm.patchValue({
        id: this.data.task?.id,
        title: this.data.task.title,
        subTasks: this.data.task.subtasks,
        contacts: this.data.task.contacts,
        status: this.data?.task.status,
      });
    }
  }

  public get subTasksFormControl() {
    return this.taskForm.get('subTasks') as FormControl;
  }

  public onSubmit() {
    this.dialogRef.close(this.taskForm.getRawValue());
    this.onReset();
  }

  public onReset() {
    this.taskForm.reset();
    this.chipFieldComponent.keywords = [];
  }

  contactCompareWithFn = (contact: Contact, value: Contact) => contact.id == value.id
}
