import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  data: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.data = this.activatedRoute.snapshot.data;
    this.activatedRoute.data.subscribe(data => {
      console.log(`data is: ${JSON.stringify(this.data)}`);
    });

  }

}
