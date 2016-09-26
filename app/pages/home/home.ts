import {Component, OnInit} from '@angular/core';
import {RowComponent} from "../../shared/components/layout/row/row";
import {ColComponent} from "../../shared/components/layout/col/col";
@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.html',
  styleUrls : ['home.css'],
  directives: [ColComponent, RowComponent]
})

export class HomePage implements OnInit{
  constructor(){
  }
  ngOnInit(){
  }
}
