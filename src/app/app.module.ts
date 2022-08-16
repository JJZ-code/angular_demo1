import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeardComponent } from './component/heard/heard.component';
import { ExamPublisherComponent } from './component/exam-publisher/exam-publisher.component';

@NgModule({
  declarations: [
    AppComponent,
    HeardComponent,
    ExamPublisherComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
