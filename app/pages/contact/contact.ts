import {Component, OnInit} from '@angular/core';
import {RowComponent} from "../../shared/components/layout/row/row";
import {ColComponent} from "../../shared/components/layout/col/col";

@Component({
  moduleId: module.id,
  selector: 'contact',
  templateUrl: 'contact.html',
  styleUrls : ['contact.css'],
  directives: [ColComponent, RowComponent]
})

export class ContactPage implements OnInit{
  constructor(){
  }
  ngOnInit(){
  }
  openGooglePlay(){
    window.open('https://play.google.com/store/apps/developer?id=Lucky+8s+Entertainment&hl=en', '_blank');
  }
}
