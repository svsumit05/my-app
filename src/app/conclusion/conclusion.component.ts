import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.css']
})
export class ConclusionComponent implements OnInit {
  personData:any;
  occupationData:any;
  LoanData:any;

  constructor(private dataService:DataServiceService) { }

  ngOnInit() {
    //fetch person/occuation/loan data from service
    this.personData = this.dataService.fetchPersonData()
    this.occupationData = this.dataService.fetchOccupationData()
    this.LoanData = this.dataService.fetchLoanData()
  }

}
