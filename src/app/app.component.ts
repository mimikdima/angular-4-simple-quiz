import { Component, ViewChildren, QueryList, OnInit,ChangeDetectorRef  } from '@angular/core';
import { QuestionStepComponent } from "./questions/question-step/question-step.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

@ViewChildren(QuestionStepComponent) steps: QueryList<QuestionStepComponent>;

step:any = [];
now:number = 0;
total:number = 0;

constructor(private cdRef:ChangeDetectorRef) {}

ngAfterViewInit() {
  /* Show first question*/
  this.steps.first.active = true;
  this.cdRef.detectChanges();
}

next() {
  this.step = this.steps.toArray();
  if(this.step[this.now].checked == this.data[this.now].correct){ // check if yor answer whas correct
    this.step[this.now].correct = true;
  }else{
    this.step[this.now].correct = false;
  }

  this.step[this.now].active = false;//disable current question
  this.now++;
  if(this.now < this.data.length){
    this.step[this.now].active = true;//show next question
  }else{
    this.totalScore();// count yor score function
  }
}

back() {
  /* To previes question   */
  this.step[this.now].active = false;
  this.now--;
  this.step[this.now].active = true;
}

totalScore(){
  /* Count you score  */
  this.total = this.steps.filter(step => step.correct == true).length;
  this.total = Math.floor((this.total/this.data.length)*100);
}

data:any[] = [{
    id:'1',
    question:'Which city is the capital of England?',
    answers: [
      {idAnswer : 1,option:'Moscow'},
      {idAnswer : 2,option:'London'},
      {idAnswer : 3,option:'Manchester'},
      {idAnswer : 4,option:'Jerusalem'},
    ],
    correct:2
  },{
    id:'2',
    question:'Which city is the capital of Russia?',
    answers: [
      {idAnswer : 1,option:'Moscow'},
      {idAnswer : 2,option:'London'},
      {idAnswer : 3,option:'Manchester'},
      {idAnswer : 4,option:'Jerusalem'},
    ],
    correct:1
  },{
    id:'3',
    question:'Which city is the capital of Israel?',
    answers: [
      {idAnswer : 1,option:'Moscow'},
      {idAnswer : 2,option:'London'},
      {idAnswer : 3,option:'Manchester'},
      {idAnswer : 4,option:'Jerusalem'},
    ],
    correct:4
}];


}
