import {Component} from '@angular/core';
import {ControlGroup, FormBuilder} from '@angular/common';
import {CardComponent} from "../layout/card/card";
import {SelectButton, SelectItem} from 'primeng/primeng';
import {Job} from "../../models/job";
import {UserService} from "../../../services/user.service";
import {DataService} from "../../../services/data.service";
import {ColComponent} from "../layout/col/col";

@Component({
  moduleId: module.id,
  selector: 'add-job',
  templateUrl: 'add-job.component.html',
  styleUrls: ['add-job.component.css'],
  directives: [CardComponent, ColComponent, SelectButton]
})

export class AddJobComponent{
  jobForm: ControlGroup;
  durations: SelectItem[] = [];
  constructor(private _fb: FormBuilder, private _userService: UserService, private _dataService: DataService){
    this.jobForm = _fb.group({
      prints: [0],
      material: [''],
      duration: [3]
    });
    this.durations.push({label: '3 Days', value: 3});
    this.durations.push({label: '7 Days', value: 7});
    this.durations.push({label: '10 Days', value: 10});
    this.durations.push({label: '14 Days', value: 14});
  }
  submitJob(data: any){
    let newJob = new Job(data);
    newJob.startDate = new Date();
    newJob.endDate = new Date();
    newJob.endDate.setDate(newJob.endDate.getDate() + newJob.duration);
    newJob.startTimeMillis = newJob.startDate.getTime();
    newJob.endTimeMillis = newJob.endDate.getTime();
    newJob.clientId = this._userService.currentUser.id;
    console.log("newJob = "+JSON.stringify(newJob));
    this._dataService.addJob(newJob, 'active').subscribe((error) => {
      if(error){
        console.error(error);
      }else{
        console.log("no error, looks good");
      }
    });
  }
}
