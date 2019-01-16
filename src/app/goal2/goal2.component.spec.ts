import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GOAL2Component } from './goal2.component';

describe('GOAL2Component', () => {
  let component: GOAL2Component;
  let fixture: ComponentFixture<GOAL2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GOAL2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GOAL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
