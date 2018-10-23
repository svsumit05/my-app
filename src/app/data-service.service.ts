import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  personDetails: any;
  occupationDetails: any;
  loanDetails: any;

  // store personData which will get personData parameter from personDetail component
  addPersonDetails(personData) {
    this.personDetails = personData;
  }

   // store companyData which will get personData parameter from occupationDetail component
  addOccupationDetails(companyData) {
    this.occupationDetails = companyData;
  }

   // store loanData which will get personData parameter from loanDetail component
  addLoanDetails(loanData){
    this.loanDetails = loanData;
  }

  // fetch personData which will use to get PersonData inside any component
  fetchPersonData(){
    return this.personDetails
  }

   // fetch occupationData which will use to get PersonData inside any component
  fetchOccupationData(){
    return this.occupationDetails
  }

   // fetch loanData which will use to get PersonData inside any component
  fetchLoanData(){
    return this.loanDetails
  }




  constructor() { }
}
