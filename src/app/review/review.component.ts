import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  public name: string="";
  public correctResponses: number=0;
  public wrongResponses: number=0;
  public score: string="";
  constructor() { }

  ngOnInit(): void {
    this.name=localStorage.getItem("name")!;
    this.correctResponses = parseInt(localStorage.getItem("correctResponses")!);
    this.wrongResponses= parseInt(localStorage.getItem("wrongResponses")!);
    this.score= localStorage.getItem("score")!;
  }

}
