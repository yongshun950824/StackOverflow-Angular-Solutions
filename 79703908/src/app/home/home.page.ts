import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonInput } from "@ionic/angular/standalone";
import { NgClass, NgIf } from '@angular/common';
import { keyOutline, logInOutline, logoGoogle, personAddOutline, refreshCircleOutline } from 'ionicons/icons';

import { Component } from '@angular/core';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent,IonButton, IonItem, FormsModule, IonCardSubtitle, ReactiveFormsModule, IonTabButton, IonTabBar, IonCardHeader, IonCardTitle, IonCardContent, IonTitle, IonCard, IonTab, IonIcon, IonTabs, NgIf, NgClass, IonLabel, IonInput],
})
export class HomePage {
  isSmall = false;


  registerForm: FormGroup;
  loginForm: FormGroup;
  passwordRecoveryForm: FormGroup;


  constructor(private fb: FormBuilder) {
    addIcons({ keyOutline, logInOutline, personAddOutline, refreshCircleOutline, logoGoogle });

    this.registerForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });
    this.passwordRecoveryForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }


  login(email: string, password: string): void {
  }
}
