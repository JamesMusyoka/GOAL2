import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GOAL2DetailsComponent } from './goal2-details.component';

describe('GOAL2DetailsComponent', () => {
  let component: GOAL2DetailsComponent;
  let fixture: ComponentFixture<GOAL2DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GOAL2DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GOAL2DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
