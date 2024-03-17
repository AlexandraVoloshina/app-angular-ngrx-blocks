import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorEmail: boolean = false;

  constructor(private fb: FormBuilder,
              private readonly loginService: LoginService,
              private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, this.checkEmail.bind(this)],
      password: ['', Validators.required]
    });
  }

  checkEmail(control: AbstractControl): Promise<any> {
    return new Promise((resolve) => {
      // Synchronous email format validation using regular expression
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(control.value)) {
        resolve({ invalidEmail: true });
      } else {
        // Asynchronous check if the email is '111'
        setTimeout(() => {
          if (control.value === '111') {
            resolve({ invalidEmail: true });
          } else {
            resolve(null);
          }
        }, 1000); // Simulating a delay of 1 second
      }
    });
  }

  login(): void {
    if(this.loginForm.valid){
      let result = this.loginService.login(this.loginForm.value);
      console.log(result);
      this._snackBar.open('Success login!');
    } else {
      this._snackBar.open('Not valid!');
    }
  }
}