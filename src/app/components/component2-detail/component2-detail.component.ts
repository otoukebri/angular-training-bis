import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component2-detail',
  templateUrl: './component2-detail.component.html',
  styleUrls: ['./component2-detail.component.css']
})
export class Component2DetailComponent implements OnInit {

  params: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // params
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.params = params;
    });

    // paramMap
    this.activatedRoute.paramMap.subscribe(paramv2 => {
       console.log(paramv2.get('id'));
    });
  }

}
