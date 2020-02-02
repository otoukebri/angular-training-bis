import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit /*, OnChanges*/ {

  registerForm: FormGroup;

  ngOnInit() {
    // register login FormGroup
    this.registerForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      adress: new FormGroup({
        city: new FormControl(''),
        zipCode: new FormControl('')
      })
    });

    // get all form control values even hidden fields
    console.log('ngOnInit.subscriptionForm.getRawValue ' + JSON.stringify(this.registerForm.getRawValue()));

    // email form value
    console.log('ngOnInitfirstName: ' + this.registerForm.get('email').value);

    // set form value
    this.registerForm.setValue({
      email: 'login@domain.com',
      password: 'secret-password',
      adress: {
        city: 'Tunis',
        zipCode: '2010'
      }
    });

    // set email value
    this.registerForm.get('email').patchValue('login@domain.com');

    // subscribe to form changes
    this.onValueChanges();

  }

  onValueChanges(): void {
    // email FormControl changes
    this.registerForm.get('email').valueChanges.subscribe(emailValue => {
      console.log('x1: ' + emailValue);
    });

    // all form control changes
    this.registerForm.valueChanges.subscribe(loginForm => {
      console.log('x1: ' + JSON.stringify(loginForm));
    });

  }
}
