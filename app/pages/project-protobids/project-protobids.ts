import {Component, OnInit} from '@angular/core';
import {RowComponent} from "../../shared/components/layout/row/row";
import {ColComponent} from "../../shared/components/layout/col/col";

@Component({
  moduleId: module.id,
  selector: 'project-protobids',
  templateUrl: 'project-protobids.html',
  styleUrls : ['project-protobids.css'],
  directives: [ColComponent, RowComponent]
})

export class ProjectProtobidsPage implements OnInit{
  constructor(){
  }
  ngOnInit(){
  }
}
