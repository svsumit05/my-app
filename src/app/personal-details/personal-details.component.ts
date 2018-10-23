import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

// use interface to bind person data
export interface Person {
  firstName:string;
  lastName: string;
  email: string;
  mobile: string,
  dob:string
}

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  personDetail : Person;
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router:Router,private dataService:DataServiceService) { }

  ngOnInit() {
    this.personDetail = this.personDetail ? this.personDetail:<Person>{}

    // formbuilder group used for validation
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      dob: ['', Validators.required]
  });
  }

  // get short use of registration form control for validation
  get f() { return this.registerForm.controls; }


/*  stop here if form is invalid else store person data in personDetail service and
   redirect to occupation-detail page */ 
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }else{
      this.dataService.addPersonDetails(this.personDetail)
      this.router.navigate(['occupation-detail']);
    }
}

}
