import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponentComponent } from './question-component/question-component.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponentComponent, 
    WelcomeComponentComponent,
    HeaderComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
