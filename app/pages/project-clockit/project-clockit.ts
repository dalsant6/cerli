import {Component, OnInit} from '@angular/core';
import {RowComponent} from "../../shared/components/layout/row/row";
import {ColComponent} from "../../shared/components/layout/col/col";

@Component({
  moduleId: module.id,
  selector: 'project-clockit',
  templateUrl: 'project-clockit.html',
  styleUrls : ['project-clockit.css'],
  directives: [ColComponent, RowComponent]
})

export class ProjectClockitPage implements OnInit{
  constructor(){
  }
  ngOnInit(){
  }
}
