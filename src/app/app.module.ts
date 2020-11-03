import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTripsComponent } from './Trips/list-trips/list-trips.component';
import { CreateTripSurveyComponent } from './Trips/create-trip-survey/create-trip-survey.component';
import {FormsModule,FormControl, FormGroup, Validators, ReactiveFormsModule, NgForm, FormBuilder, FormArray} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListTripsComponent,
    CreateTripSurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
