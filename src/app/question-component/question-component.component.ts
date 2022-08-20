import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-question-component',
  templateUrl: './question-component.component.html',
  styleUrls: ['./question-component.component.css']
})
export class QuestionComponentComponent implements OnInit {

  public name: string="";
  public questionList: any=[];
  public currentQuestion: number=0;
  public points: number=0;
  correctAnswers: number=0;
  wrongAnswers: number=0;
  progress: number=0;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
  }
  getAllQuestions(){
    this.questionService.getQuestionJson().subscribe((res)=>{
      console.log(res.questions);
      this.questionList = res.questions;
    })
  };
  nextQuestion(){
    if(this.currentQuestion<(this.questionList.length -1)){
      this.currentQuestion+=1;
      console.log(this.points);
      this.progress+=25;
    }
    else if(this.currentQuestion==this.questionList.length-1){
      this.declareResult();
    }
    
  }
  prevQuestion(){
    if(this.currentQuestion!==0){
      this.currentQuestion-=1;
      this.progress-=25;
    }
    
  }
  answer(qno:number,option:any){
    if(option.correct){
      this.points+=10;
      this.correctAnswers++;
    }
    else{
      this.wrongAnswers++;
    }
    this.nextQuestion();
  }
  declareResult(){
    localStorage.setItem("score",String(this.points));
    localStorage.setItem("correctResponses",String(this.correctAnswers));
    localStorage.setItem("wrongResponses",String(this.wrongAnswers));
  }

}
