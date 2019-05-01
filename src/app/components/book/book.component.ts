import { Component, OnInit, InjectionToken, Inject } from '@angular/core';

export const ANGULAR_BOOK = new InjectionToken<string>('Angular Ninja');

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [{provide: ANGULAR_BOOK, useValue: 'Angular Ninja 6' }]
})
export class BookComponent implements OnInit {

  constructor(@Inject(ANGULAR_BOOK) private message: string) { }

  ngOnInit() {
  }

}
