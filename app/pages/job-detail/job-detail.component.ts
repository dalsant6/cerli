import {Component, OnInit, OnDestroy} from '@angular/core';
import {UserService} from "../../services/user.service";
import {RowComponent} from "../../shared/components/layout/row/row";
import {ColComponent} from "../../shared/components/layout/col/col";
import {Job} from "../../shared/models/job";
import {Router, Route, RouteSegment} from "@angular/router";
import {DataService} from "../../services/data.service";
import {AddBidComponent} from "../../shared/components/add-bid/add-bid.component";
import {CardComponent} from "../../shared/components/layout/card/card";
import {Client} from "../../shared/models/client";
import {PageContentComponent} from "../../shared/components/layout/page-content/page-content";
import {BidComponent} from "../../shared/components/bid/bid.component";
import {SpacerComponent} from "../../shared/components/layout/spacer/spacer.component";

@Component({
  moduleId: module.id,
  selector: 'job-detail',
  templateUrl: 'job-detail.component.html',
  styleUrls: ['job-detail.component.css'],
  directives: [ColComponent, AddBidComponent, CardComponent, RowComponent, PageContentComponent, BidComponent, SpacerComponent]
})

export class JobDetailComponent implements OnInit, OnDestroy{
  job: Job;
  client: Client;
  sorted: string = '';
  constructor(private rs: RouteSegment, private _dataService: DataService, private _userService: UserService){
  }
  ngOnInit() {
    let jobId = this.rs.getParam('id');
    this._dataService.getJob(jobId).subscribe((data) => {
      this.job = new Job(data[jobId]);
      this._userService.getUser(this.job.clientId).subscribe((user) =>{
        this.client = user;
      });
    });
  }
  ngOnDestroy(){
  }
  sortNewest(){
    this.job.bids.sort(function (a, b) {
      let aTimeMillis = a.dateSubmitted;
      let bTimeMillis = b.dateSubmitted;
      return bTimeMillis-aTimeMillis;
    });
    this.sorted = 'newest';
  }
  sortCheapest(){
    this.job.bids.sort(function (a, b) {
      let aTotal = a.orderTotal;
      let bTotal = b.orderTotal;
      return aTotal-bTotal;
    });
    this.sorted = 'cheapest';
  }
  sortFastest(){
    this.job.bids.sort(function (a, b) {
      let aDays = a.days;
      let bDays = b.days;
      return aDays-bDays;
    });
    this.sorted = 'fastest';
  }
  getInitials(first: string, last: string): string {
    let firstInit = first.charAt(0).toUpperCase();
    let lastInit = last.charAt(0).toUpperCase();
    return firstInit+lastInit;

  }
}
