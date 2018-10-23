import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {
  loanValue = {
    totalAmount:0,
    existingAmount:0
  };

  //format label value of slider
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    if (value >= 1000 && value < 100000) {
      return Math.round(value / 1000) + 'k';
    }
    if(value >= 100000){
      return Math.round(value / 100000) + 'L';
    }
    return value;
  }

  //add loanData into service and navigate to conclusion page
  nextStepConclusion(){
    this.dataService.addLoanDetails(this.loanValue)
    this.router.navigate(['conclusion']);
  }

  constructor(private router:Router,private dataService:DataServiceService) { }

  ngOnInit() {
  }

}
