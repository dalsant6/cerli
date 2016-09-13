import {Component, Input} from '@angular/core';
import {Job} from "../../models/job";
import {ColComponent} from "../layout/col/col";
import {RowComponent} from "../layout/row/row";
import {CardComponent} from "../layout/card/card";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'client-job',
  templateUrl: 'client-job.component.html',
  styleUrls: ['client-job.component.css'],
  directives: [RowComponent, ColComponent, CardComponent]
})

export class ClientJobComponent {
  @Input('job') job: Job;
  constructor(private _router: Router){}
}
