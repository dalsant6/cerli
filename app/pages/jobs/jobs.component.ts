import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {RowComponent} from "../../shared/components/layout/row/row";
import {ColComponent} from "../../shared/components/layout/col/col";
import {ClientJobsComponent} from "../../shared/components/client-jobs/client-jobs.component";

@Component({
  moduleId: module.id,
  selector: 'jobs',
  templateUrl: 'jobs.component.html',
  directives: [RowComponent, ColComponent, ClientJobsComponent]
})

export class JobsComponent {
active: string = 'active';

  constructor(){
    console.log('started jobs!');
  }
  changeStatus(active: string){
    this.active = active;
  }
}
