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
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

    console.log('ngOnInit.subscriptionForm.getRawValue ' +  JSON.stringify(this.loginForm.getRawValue()));

    console.log('ngOnInitfirstName: ' +  this.loginForm.get('email').value);

    this.onValueChanges();

  }

  onValueChanges(): void {
    // only firstNameControl changes
    this.loginForm.get('email').valueChanges.subscribe( x => {
      console.log('x1: ' +  x);
    });

    // all form control changes
    this.loginForm.valueChanges.subscribe( x => {
      console.log('x1: ' +  JSON.stringify(x));
    });

  }

  // public ngOnChanges(changes: SimpleChanges) {

  //   // if ('firstName' in changes) {
  //   //   console.log('v: ' + v);
  //   // }
  // }
}
