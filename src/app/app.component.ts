import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('myTemplateRef')
  myTemplate;

  product =  {
    name : 'hp',
    price : 1000
  };

  ngAfterViewInit() {
    console.log(this.myTemplate);
  }
}
