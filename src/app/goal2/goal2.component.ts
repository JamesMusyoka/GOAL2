import { Component, OnInit } from '@angular/core';
import {Goal2} from '../goal2';
@Component({
  selector: 'app-goal2',
  templateUrl: './goal2.component.html',
  styleUrls: ['./goal2.component.css']
})
export class GOAL2Component implements OnInit {
 goal2 = [
  new Goal2(1, 'Watch Finding Nemo', 'Find an online version and watch merlin find his son', new Date(2018, 3, 14)),
  new Goal2(2, 'Buy Cookies', 'I have to buy cookies for the parrot', new Date(2018, 6, 9)),
  new Goal2(3, 'Get new Phone Case', 'Diana has her birthday coming up soon', new Date(2018, 1, 12)),
  new Goal2(4, 'Get Dog Food', 'Pupper likes expensive sancks', new Date(2018, 0, 18) ),
  new Goal2(5, 'Solve math homework', 'Damn Math', new Date(2018, 2, 14) ),
  new Goal2(6, 'Plot my world domination plan', 'Cause I am an evil overlord', new Date(2018, 3, 14)),
 ];
 deleteGoal2(isComplete, index) {
  if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.goal2[index].name}`);

      if (toDelete) {
  this.goal2.splice(index, 1);
   }
}
}
addNewGoal2(goal) {
const goalLength = this.goal2.length;
goal.id = goalLength + 1;
goal.completeDate = new Date(goal.completeDate);
this.goal2.push(goal);

}
  toogleDetails(index) {
  this.goal2[index].showDescription = !this.goal2[index].showDescription;
}
constructor() { }
ngOnInit() {
}
}

