import {Component, Input, OnInit} from '@angular/core';
import {ColComponent} from "../layout/col/col";
import {RowComponent} from "../layout/row/row";
import {CardComponent} from "../layout/card/card";
import {Router, ROUTER_DIRECTIVES} from "@angular/router";
import {Bid} from "../../models/bid";
import {Contractor} from "../../models/contractor";
import {UserService} from "../../../services/user.service";
import {RatingComponent} from "../rating/rating.component";

@Component({
  moduleId: module.id,
  selector: 'bid',
  templateUrl: 'bid.component.html',
  styleUrls: ['bid.component.css'],
  directives: [RowComponent, ColComponent, CardComponent, RatingComponent, ROUTER_DIRECTIVES]
})

export class BidComponent implements OnInit{
  @Input('bid') bid: Bid;
  contractor: Contractor;
  showDetail: boolean;
  constructor(private _userService: UserService, private _router: Router){

  }
  ngOnInit(){
    console.log('bid = '+JSON.stringify(this.bid));
    this._userService.getUser(this.bid.contractorId).subscribe((user) =>{
      this.contractor = user;
      console.log('contractor = '+JSON.stringify(this.contractor));
    });
  }
//
}
