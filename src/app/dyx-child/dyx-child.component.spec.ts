import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyxChildComponent } from './dyx-child.component';

describe('DyxChildComponent', () => {
  let component: DyxChildComponent;
  let fixture: ComponentFixture<DyxChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyxChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyxChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
