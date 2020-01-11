import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
    test: new FormControl('disabled')

  });


  constructor() { }

  ngOnInit() {
    this.loginFormGroup.valueChanges.subscribe( x =>{
      console.log('x : '  + JSON.stringify(x));
      console.log('form: ' + JSON.stringify(this.loginFormGroup.getRawValue()));
    });
  }

  authenticate() {
    console.log('authenticate clicked');
    this.loginFormGroup.controls.login.setValue('invalid login');
  }

  onSubmit() {
    console.warn(this.loginFormGroup.value);
  }

}
