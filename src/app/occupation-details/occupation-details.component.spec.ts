import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationDetailsComponent } from './occupation-details.component';

describe('OccupationDetailsComponent', () => {
  let component: OccupationDetailsComponent;
  let fixture: ComponentFixture<OccupationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
