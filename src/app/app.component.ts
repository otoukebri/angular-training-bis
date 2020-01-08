import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'angular-training-bis';

  param1;
  param2;

  ngOnInit() {
    setTimeout(() => {
      this.param1 =  'hello';
    }, 3000);
    setTimeout(() => {
      this.param2 = 'hi';
    }, 10000);

    setTimeout(() => {
      this.param2 = 'hi!!';
    }, 10000);
  }
}
