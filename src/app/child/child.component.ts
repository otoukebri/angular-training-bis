import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input()
  param1: string;

  @Input()
  param2: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
      console.log('param1 :' + JSON.stringify(changes['param1']));
      console.log('param2: ' + JSON.stringify(changes['param2']));
      if (changes['param1']) {
        console.log('param1* :' + JSON.stringify(changes['param1'].currentValue));
      }
      if (changes['param2']) {
        console.log('param2* :' + JSON.stringify(changes['param2'].currentValue));
      }

  }

}
