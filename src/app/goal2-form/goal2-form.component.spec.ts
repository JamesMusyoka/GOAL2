import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GOAL2FormComponent } from './goal2-form.component';

describe('GOAL2FormComponent', () => {
  let component: GOAL2FormComponent;
  let fixture: ComponentFixture<GOAL2FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GOAL2FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GOAL2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
