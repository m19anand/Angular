import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTripSurveyComponent } from './create-trip-survey.component';

describe('CreateTripSurveyComponent', () => {
  let component: CreateTripSurveyComponent;
  let fixture: ComponentFixture<CreateTripSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTripSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTripSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
