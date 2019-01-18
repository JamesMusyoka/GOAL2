import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Goal2} from '../goal2';

@Component({
  selector: 'app-goal2-form',
  templateUrl: './goal2-form.component.html',
  styleUrls: ['./goal2-form.component.css']
})
export class GOAL2FormComponent implements OnInit {
  newGoal = new Goal2(0, '' , '', new Date());
  @Output() addGoal = new EventEmitter<Goal2>();

  submitGoal() {
      this.addGoal.emit(this.newGoal);
  }
  constructor() { }

  ngOnInit() {
  }

}
