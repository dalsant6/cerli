import {Component, OnInit} from '@angular/core';
import {RowComponent} from "../../shared/components/layout/row/row";
import {ColComponent} from "../../shared/components/layout/col/col";

@Component({
  moduleId: module.id,
  selector: 'project-protodash',
  templateUrl: 'project-protodash.html',
  styleUrls : ['project-protodash.css'],
  directives: [ColComponent, RowComponent]
})

export class ProjectProtodashPage implements OnInit{
  constructor(){
  }
  ngOnInit(){
  }
}
