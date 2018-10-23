import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

// use interface for data binding
export interface Company {
  id:number;
  name: string;
  address: string;
}

@Component({
  selector: 'app-occupation-details',
  templateUrl: './occupation-details.component.html',
  styleUrls: ['./occupation-details.component.css']
})
export class OccupationDetailsComponent implements OnInit {
  companyDetailControl = new FormControl();

  // json data for companyList
  companyDetailList:Company[] =  [
    {
    id:1,
    name:'neoSoft',
    address:'Rabale'
  },
  {
    id:2,
    name:'VNHPL',
    address:'Andheri'
  },
  {
    id:3,
    name:'Wohlig Transformation',
    address:'Sion'
  }
];
  filteredCompanyDetailList: Observable<Company[]>;
  
  constructor(public snackBar: MatSnackBar,private router:Router,private dataService:DataServiceService) { }

  ngOnInit() {
    //store filtered company list option values
    this.filteredCompanyDetailList = this.companyDetailControl.valueChanges
      .pipe(
        startWith<string | Company>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this.filterCompanyList(name) : this.companyDetailList.slice())
      );
  }

  // display selected data on autocomplete
  displayCompanyName(company?: Company): string | undefined {
    return company ? company.name : undefined;
  }

  // filter autocomplete data and return match value from list
  private filterCompanyList(value: string): Company[] {
    const filterValue = value.toLowerCase();
    return this.companyDetailList.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  // validate empty value and navigate to loan-detail page
  nextStep(){
    if(this.companyDetailControl.value){
    this.dataService.addOccupationDetails(this.companyDetailControl.value)
    this.router.navigate(['loan-detail']);
    }else{
      this.snackBar.open('Please select company','',{
        duration: 2000,
      })
    }
    
  }

}
