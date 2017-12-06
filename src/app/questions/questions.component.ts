import { Component, ViewChildren, QueryList, OnInit } from '@angular/core';
import { QuestionStepComponent } from "./question-step/question-step.component";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @ViewChildren(QuestionStepComponent) steps: QueryList<QuestionStepComponent>;
//step:any;

  ngAfterViewInit() {
    // this.step = this.steps;
    // for (var i of this.step){
    //   this.step++;
    // }
    //this.steps.forEach(div => console.log(div));
    //this.steps.forEach(stepInstance  => console.log(stepInstance));

  //  console.log(`ngAfterViewInit - jokeViewChild is ${this.steps}`);
    //console.log(this.steps)

// this.steps.forEach((child) => { child.question = 'y' })
// console.log(this.steps.toArray())
// this.steps.toArray().forEach((item) => { console.log('the item: ') });

//     // Will be called every time an item is added/removed
//    this.steps.changes.subscribe( () => console.log('Something has changed') );
//    // Loop through or filter/mpa/reduce to get individual elements
//    this.steps.forEach( (i) => console.log(i) );

  }

  constructor() { }

  ngOnInit() {
  }
  next() {
      console.log(this.steps)

    //find current step in this.steps
    //disable it
    //enable next step
    //example this.steps[1].active = false;
    //this.steps[2].active = true;


    //add logic if it last screen
    //count all questions results
    //you got access to steps[n].correct
  }

  back() {
    //do the opposite
  }
}
