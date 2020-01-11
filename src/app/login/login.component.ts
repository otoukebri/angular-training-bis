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

    console.log('login control value: ' +  this.loginFormGroup.get('login').patchValue('some test value'));

    this.loginFormGroup.valueChanges.subscribe( x => {
      console.log('x : '  + JSON.stringify(x));
      console.log('form: ' + JSON.stringify(this.loginFormGroup.getRawValue()));
      console.log('login control value: ' +  this.loginFormGroup.get('login').value);
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
