import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private service: AuthenticationService) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup(
      {
        email: new FormControl('', Validators.email),
        password: new FormControl('', Validators.minLength(6))
      }
    )
  }

  onSubmit() {
    console.log("Submit");
    this.service.register(this.registrationForm.value).subscribe( (res) => {
      console.log('Registered');
    }, (error => {
      console.log(error);
    }));
  }
}
