import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  count: number = 10;

  onCountChange($event){
        console.log("AppComponent.onCountChange()");
        this.count = $event
  }
}