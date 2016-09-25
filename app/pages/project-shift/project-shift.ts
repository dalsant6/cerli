import {Component, OnInit} from '@angular/core';
import {RowComponent} from "../../shared/components/layout/row/row";
import {ColComponent} from "../../shared/components/layout/col/col";

@Component({
  moduleId: module.id,
  selector: 'project-shift',
  templateUrl: 'project-shift.html',
  styleUrls : ['project-shift.css'],
  directives: [ColComponent, RowComponent]
})

export class ProjectShiftPage implements OnInit{
  constructor(){
  }
  ngOnInit(){
  }
}
