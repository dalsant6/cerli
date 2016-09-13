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
import {Contractor} from "../../shared/models/contractor";

@Component({
  moduleId: module.id,
  selector: 'contractor-overview',
  templateUrl: 'contractor-overview.component.html',
  directives: [ColComponent, AddBidComponent, CardComponent, RowComponent, PageContentComponent, BidComponent]
})

export class ContractorOverviewComponent implements OnInit, OnDestroy{
  
  contractor: Contractor;
  constructor(private rs: RouteSegment, private _userService: UserService){
  }
  ngOnInit() {
    let contractorId = this.rs.getParam('id');
    this._userService.getUser(contractorId).subscribe((user) => {
      this.contractor = new Contractor(user);
    });
  }
  ngOnDestroy(){
  }
}
