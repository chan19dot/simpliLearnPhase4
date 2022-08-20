import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponentComponent } from './question-component/question-component.component';
import { ReviewComponent } from './review/review.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';

const routes: Routes = [
  {path:"", component:WelcomeComponentComponent},
  {path:"question", component:QuestionComponentComponent},
  {path:"results", component:ReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
