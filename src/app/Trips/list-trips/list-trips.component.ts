import { Component, OnInit } from '@angular/core';
import { Trips } from '../../Models/Trips.model';
import { Services } from '../../Models/Services.model';
import { NgForm, FormsModule, ReactiveFormsModule, FormBuilder, FormArray, FormGroup,Validators,FormControl } from '@angular/forms';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-list-trips',
  templateUrl: './list-trips.component.html',
  styleUrls: ['./list-trips.component.css']
})
export class ListTripsComponent implements OnInit {
 model1: Trips;
 tempModel : Trips[];
  Servics: Array<String> = ['Car', 'Bus', 'Hotel', 'Restaurant', 'Plane'];
  ShowHideFlag : boolean = false;
  selectedServValues = [];
  IdForUpdatingRecord: number;
  survey:FormGroup;
  tripsmodel: Trips[] = [
    {
      Id:1,VacationsPerYear: '1-2', VacationPerYearAnswer: '', EnjoyableTrip: "true", SurveyNo: "1",
      ServicesUsed: ['Car', 'Hotel'], ServicesUsedAnswer: '',index:"0"
    },
    {
      Id:2,VacationsPerYear: '3-4', VacationPerYearAnswer: '', EnjoyableTrip: "true", SurveyNo: "2",
      ServicesUsed: ['Car', 'Hotel'], ServicesUsedAnswer: '',index:"1"
    },
    {
      Id:3,VacationsPerYear: '5+', VacationPerYearAnswer: '', EnjoyableTrip: "true", SurveyNo: "3",
      ServicesUsed: ['Car', 'Hotel'], ServicesUsedAnswer: '',index:"2"
    },
    {
      Id:4,VacationsPerYear: '1-2', VacationPerYearAnswer: '', EnjoyableTrip: "true", SurveyNo: "4",
      ServicesUsed: ['Car', 'Hotel'], ServicesUsedAnswer: '',index:"3"
    }];
    


  createTripSurvey: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.createTripSurvey = this._fb.group({
      ServSelected: this.addServicsControls()      
    });
    this.model1 = new Trips(0,"","","","",['car'],'','');
    this.tempModel = this.tripsmodel;
  
    // this.survey = new FormGroup({
    //   surveyno : new FormControl('Please enter Survey no.',Validators.required)
    // });
  }

  addServicsControls() {
    const arr = this.Servics.map(element => {
      return this._fb.control(false);
    });

    return this._fb.array(arr);
  }

  AddTripsSurvey(Trips: NgForm): void {
    console.log("survey no."+ Trips.value.SurveyNo);
   this.tripsmodel.push({ Id:this.tripsmodel.length+1, VacationsPerYear: Trips.value.vacationsperyear, VacationPerYearAnswer: '', EnjoyableTrip: String(Trips.value.EnjoyableTrip) , SurveyNo: String(Trips.value.SurveyNo) ,
   ServicesUsed: this.selectedServValues, ServicesUsedAnswer: '',index: String(this.tripsmodel.length)});
    // console.log(Trips.value);
    // console.log(this.selectedServValues);
    console.log(this.tripsmodel);
    this.clearAllFields();

  }

  get ServicsArray() {
    return <FormArray>this.createTripSurvey.get('ServSelected');
  }

  getSelectedServValues() {
    console.log();
    console.log(this.ServicsArray.controls);
    this.selectedServValues = [];
    this.ServicsArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedServValues.push(this.Servics[i]);
      }
    });

    console.log(this.selectedServValues);
  }

  DeleteSurvey(Id)
  {
    //this.tripsmodel.splice(Id, 1);
    this.tripsmodel = this.tripsmodel.filter(item => item.Id !== Id);
  }

  EditSurvey(Id,index)
  {
    this.ShowHideFlag = true;
    //this.tripsmodel[Id-1];
    this.model1.ServicesUsed = this.tempModel[Id-1].ServicesUsed;
    console.log(this.model1.ServicesUsed);
    console.log(this.tripsmodel[Id-1].ServicesUsed);
    this.model1.EnjoyableTrip = String(this.tempModel[Id-1].EnjoyableTrip);
    this.model1.VacationsPerYear = String(this.tempModel[Id-1].VacationsPerYear);
    this.model1 = this.tempModel[Id-1];
    this.model1.ServicesUsed = this.tempModel[Id-1].ServicesUsed;
    this.IdForUpdatingRecord = index;
  }

  UpdateField(Trips: NgForm)
  {
    console.log(Trips);
    // this.tempModel[parseInt(String(this.IdForUpdatingRecord))] = { Id:this.tripsmodel.length+1, VacationsPerYear: Trips[parseInt(String(this.IdForUpdatingRecord))].vacationsperyear, VacationPerYearAnswer: '', EnjoyableTrip: String(Trips[parseInt(String(this.IdForUpdatingRecord))].EnjoyableTrip) , SurveyNo: String(Trips[parseInt(String(this.IdForUpdatingRecord))].SurveyNo),
    // ServicesUsed: this.selectedServValues, ServicesUsedAnswer: '',index:this.IdForUpdatingRecord+""};//]{ Id:this.tripsmodel.length+1, VacationsPerYear: Trips.value.vacationsperyear, VacationPerYearAnswer: '', EnjoyableTrip: String(Trips.value.EnjoyableTrip) , SurveyNo: String(Trips.value.SurveyNo)
   
   this.tempModel = this.tripsmodel;
   this.clearAllFields();
   this.ShowHideFlag = false;
   this.tempModel[parseInt(String(this.IdForUpdatingRecord))].ServicesUsed = this.selectedServValues;
   console.log(this.selectedServValues);
   console.log(this.IdForUpdatingRecord);
  }

  hideRetry(){
    this.ShowHideFlag = true;
  }

  clearAllFields()
  {
    this.model1 = new Trips(0,"","","","",[""],"","");
    // this.selectedServValues = null;
    this.tempModel = this.tripsmodel;
  }
}
