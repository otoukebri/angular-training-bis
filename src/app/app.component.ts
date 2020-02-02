import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit /*, OnChanges*/ {

  loginForm: FormGroup;

  ngOnInit() {
    // register login FormGroup
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

    // get all form control values
    console.log('ngOnInit.subscriptionForm.getRawValue ' +  JSON.stringify(this.loginForm.getRawValue()));

    // email form value
    console.log('ngOnInitfirstName: ' +  this.loginForm.get('email').value);

    // set form value
    this.loginForm.setValue({
      email : 'login@domain.com',
      password: 'secret-password'
    });

    // set email value
    this.loginForm.get('email').patchValue('login@domain.com');

    // subscribe to form changes
    this.onValueChanges();

  }

  onValueChanges(): void {
    // email FormControl changes
    this.loginForm.get('email').valueChanges.subscribe( emailValue => {
      console.log('x1: ' +  emailValue);
    });

    // all form control changes
    this.loginForm.valueChanges.subscribe( loginForm => {
      console.log('x1: ' +  JSON.stringify(loginForm));
    });

  }
}
