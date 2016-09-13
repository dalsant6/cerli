import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {AddJobComponent} from "../../../shared/components/add-job/add-job.component";
import {PageContentComponent} from "../../../shared/components/layout/page-content/page-content";
import {ColComponent} from "../../../shared/components/layout/col/col";
import {RowComponent} from "../../../shared/components/layout/row/row";
import {Client} from "../../../shared/models/client";
import {RatingComponent} from "../../../shared/components/rating/rating.component";
import {JobsComponent} from "../../jobs/jobs.component";

@Component({
	moduleId: module.id,
	selector: 'client-home',
	templateUrl: 'client-home.html',
  styleUrls : ['client-home.css'],
  directives: [AddJobComponent, ColComponent, RowComponent, PageContentComponent, RatingComponent, JobsComponent]
})

export class ClientHomeComponent implements OnInit{
  client: Client;
  constructor(private _userService: UserService){
  }
  ngOnInit(){
    this._userService.getUser(this._userService.getCurrentUser().uid).subscribe((user) => {
      console.log('userlol = '+JSON.stringify(user));
      this.client = new Client(user);
    });
  }
}
