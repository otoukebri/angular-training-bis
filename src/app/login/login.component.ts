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
      // console.log('login control value: ' +  this.loginFormGroup.i);
      // this.password.setValue('invalid login');
      console.log('this.loginFormGroup.dirty: ' + this.loginFormGroup.dirty);
      console.log('this.loginFormGroup.pristine: ' + this.loginFormGroup.pristine);
      console.log('this.loginFormGroup.valid: ' + this.loginFormGroup.valid);
      console.log('this.loginFormGroup.errors: ' + this.loginFormGroup.errors);

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
