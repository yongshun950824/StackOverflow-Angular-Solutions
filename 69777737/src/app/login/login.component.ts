import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username!: string;
  password!: string;
  formData!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.formData = new FormGroup({
      username: new FormControl('admin', [Validators.required]),
      password: new FormControl('admin', [Validators.required]),
    });
  }

  doLogin(data: any) {
    this.username = data.username;
    this.password = data.password;

    console.log('Login page: ' + this.username);
    console.log('Login page: ' + this.password);

    this.authService.login(this.username, this.password).subscribe((data) => {
      console.log('Is Login Success: ' + data);

      if (data) this.router.navigate(['/home']);
      else this.formData.setErrors({ unauthenticated: true });
    });
  }
}
