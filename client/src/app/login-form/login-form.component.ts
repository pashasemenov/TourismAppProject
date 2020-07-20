import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private service: AuthenticationService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', Validators.email),
        password: new FormControl('', Validators.minLength(6))
      }
    )
  }

  onSubmit() {
    console.log("Submit");
    this.service.login(this.loginForm.value).subscribe((res) => {
      console.log('Login is successful');
    }, (error => {
      console.log(error);
    }));
  }
}
