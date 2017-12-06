import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-step',
  templateUrl: './question-step.component.html',
  styleUrls: ['./question-step.component.css']
})
export class QuestionStepComponent implements OnInit {
  @Input() public question:string;
  @Input() public answers:any;

  public active:boolean = false;
  public correct:boolean = false;
  public checked:number;

  onAnswer(answer:number) {
    this.checked = answer;
  }

  constructor() { }

  ngOnInit() { }

}
