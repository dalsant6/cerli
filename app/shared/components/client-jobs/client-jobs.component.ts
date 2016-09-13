import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";
import {UserService} from "../../../services/user.service";
import {Job} from "../../models/job";
import {ColComponent} from "../layout/col/col";
import {RowComponent} from "../layout/row/row";
import {Observable} from "rxjs/Rx";
import {ClientJobComponent} from "../client-job/client-job.component";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'client-jobs',
  templateUrl: 'client-jobs.component.html',
  styleUrls: ['client-jobs.component.css'],
  directives: [RowComponent, ColComponent, ClientJobComponent]
})

export class ClientJobsComponent implements OnInit{
  @Input('status') status = 'active';
  activeJobs: Job[] = [];
  progressJobs: Job[] = [];
  completeJobs: Job[] = [];

  constructor(private _userService: UserService, private _dataService: DataService, private _router: Router){

  }

  ngOnInit() {
      this._dataService.getActiveClientJobs(this._userService.getCurrentUser().id).subscribe((data) => {
        if (data != null) {
          this.activeJobs = [];
          let keys = Object.keys(data);
          keys.forEach((key) => {
            let job = new Job(data[key]);
            this.activeJobs.push(job);
          });
          this.activeJobs.sort(function (a, b) {
            let aLeft = a.endTimeMillis - a.startTimeMillis;
            let bLeft = b.endTimeMillis - b.startTimeMillis;
            return aLeft - bLeft;
          });
        }
      });
      this._dataService.getProgressClientJobs(this._userService.getCurrentUser().id).subscribe((data) => {
        if (data != null) {
          this.progressJobs = [];
          let keys = Object.keys(data);
          keys.forEach((key) => {
            let job = new Job(data[key]);
            this.progressJobs.push(job);
          });
          this.progressJobs.sort(function (a, b) {
            let aLeft = a.endTimeMillis - a.startTimeMillis;
            let bLeft = b.endTimeMillis - b.startTimeMillis;
            return aLeft - bLeft;
          });
        }
      });
      this._dataService.getCompleteClientJobs(this._userService.getCurrentUser().id).subscribe((data) => {
        if (data != null) {
          this.completeJobs = [];
          let keys = Object.keys(data);
          keys.forEach((key) => {
            let job = new Job(data[key]);
            this.completeJobs.push(job);
          });
          this.completeJobs.sort(function (a, b) {
            let aLeft = a.endTimeMillis - a.startTimeMillis;
            let bLeft = b.endTimeMillis - b.startTimeMillis;
            return aLeft - bLeft;
          });
        }
      });
    }
  goToJob(job: Job){
      this._router.navigate(['/dashboard','/job-detail', job.id]);
  }
}
