import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {Goal2} from '../goal2';

@Component({
  selector: 'app-goal2-details',
  templateUrl: './goal2-details.component.html',
  styleUrls: ['./goal2-details.component.css']
})
export class GOAL2DetailsComponent implements OnInit {
  newGoal = new Goal2(0, '' , '', new Date());
  @Input() goal: Goal2;
  @Output() isComplete = new EventEmitter<boolean>();

  goalDelete(complete: boolean) {
      this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
