import { Component, OnInit } from '@angular/core';
import { Trips} from '../../Models/Trips.model';
import {Services} from '../../Models/Services.model';
import {NgForm, FormsModule,ReactiveFormsModule, FormBuilder, FormArray, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-create-trip-survey',
  templateUrl: './create-trip-survey.component.html',
  styleUrls: ['./create-trip-survey.component.css']
})
export class CreateTripSurveyComponent implements OnInit {
//   model1:Trips;
// //   servs: Services;
// //   servsList:Services[];
// // selectedServices:string[];
// Servics: Array<String> = ['Car','Bus','Hotel','Restaurant','Plane'];
// selectedServValues = [];

// createTripSurvey : FormGroup;
//   constructor(private _fb : FormBuilder) { }

  ngOnInit() {
    // this.createTripSurvey = this._fb.group({
    //   ServSelected : this.addServicsControls()
    // });
    //     this.model1 = new Trips(); //2, "1-2", true, ['Car','Bus']
    //this.selectedServices = new Array<string>();    
  }

//   addServicsControls(){
//     const arr = this.Servics.map(element =>{
//       return this._fb.control(false);
//     });

//     return this._fb.array(arr);
//   }
  
//   AddTripsSurvey(Trips: NgForm):void{
//     // console.log(this.selectedServices);
//     // console.log(this.model1.ServicesUsed);
//     //this.model1.ServicesUsed = this.selectedServices.filter(m => m ==)
//     // this.model1.ServicesUsed.forEach(function(value){
//     //   this.selectedServices.forEach(function(element) {
//     //     if(value.Id == element)
//     //     {
//     //       this.servs.Id = value.Id;
//     //        this.servs.Title = value.Title
//     //        this.servsList.push(this.servs);
//     //     }
//     //   });      
//     // });
    
//     console.log(Trips.value);
//     console.log(this.selectedServValues);
//   }
  
//   // getServicesSelected($event :any, id : string){
//   //   if($event.target.checked)
//   //   {
//   //     console.log(id + 'Checked');
//   //     this.selectedServices.push(id);
//   //   }
//   //   else
//   //   {
//   //     console.log(id + 'UnChecked');
//   //     this.selectedServices = this.selectedServices.filter(m => m!=id);
//   //   }
//   //   console.log(this.selectedServices);
//   // }

//   get ServicsArray(){
//     return <FormArray>this.createTripSurvey.get('ServSelected');
//   }

//   getSelectedServValues(){
//     console.log();
//     console.log( this.ServicsArray.controls);
//     this.selectedServValues = [];
//     this.ServicsArray.controls.forEach((control,i) =>{
//       if (control.value){
//         this.selectedServValues.push(this.Servics[i]);
//       }
//     });

//     console.log(this.selectedServValues);
//   }
}
