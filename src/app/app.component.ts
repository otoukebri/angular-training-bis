import { Component, OnInit } from '@angular/core';
import { of, Subject, timer } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit /*, OnChanges*/ {

  ngOnInit() {

    const subject = new Subject();
    subject.subscribe(() => console.log('value!!'));

    // exp2
    const source = timer(1000, 2000);
    const subscribe = source.subscribe(val => console.log(val));
    setTimeout(() => { subscribe.unsubscribe(); }, 10000);

    // exp3
    const observable = of('apple', 'orange', 'grappe');
    const observer = {
      next: (x: string) => console.log('Observer got a next value: ' + x),
      error: (err: string) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    observable.subscribe(observer);

  }
}
