import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ ListTripsComponent } from './Trips/list-trips/list-trips.component';
import {CreateTripSurveyComponent} from './Trips/create-trip-survey/create-trip-survey.component';

const routes: Routes = [
  { path: 'survey-list', component: ListTripsComponent},
  // { path: 'create-survey', component: CreateTripSurveyComponent},
  { path: '', redirectTo: '/survey-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
