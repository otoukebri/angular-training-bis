import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-dyx-child',
  templateUrl: './dyx-child.component.html',
  styleUrls: ['./dyx-child.component.css']
})
export class DyxChildComponent implements OnInit, OnChanges {

  @Input()
  parentCount: number;
 
  @Output() onChildCountChange = new EventEmitter<number>();

  constructor() { }


  ngOnInit() {
    console.log('DyxChildComponent.ngOnInit()');

  }

  //Called when any field input in the component changes
  ngOnChanges(changes: SimpleChanges): void {
    console.log('DyxChildComponent.ngOnChanges()');
    console.log('DyxChildComponent.ngOnChanges().changes.parentCount.currentValue: ' +
      changes.parentCount.currentValue);

  }

  onClickCount() {
    console.log('DyxChildComponent.onClickCoun()');
    this.parentCount++;
    this.onChildCountChange.emit(this.parentCount);
  }

}
