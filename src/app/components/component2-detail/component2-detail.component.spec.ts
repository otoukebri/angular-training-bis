import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component2DetailComponent } from './component2-detail.component';

describe('Component2DetailComponent', () => {
  let component: Component2DetailComponent;
  let fixture: ComponentFixture<Component2DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component2DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component2DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
