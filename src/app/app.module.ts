import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GOAL2Component } from './goal2/goal2.component';
import { GOAL2DetailsComponent } from './goal2-details/goal2-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GOAL2FormComponent } from './goal2-form/goal2-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GOAL2Component,
    GOAL2DetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    GOAL2FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
