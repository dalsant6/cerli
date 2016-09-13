import {Component, Input} from '@angular/core';
import {ColComponent} from "../..//layout/col/col";
import {RowComponent} from "../../layout/row/row";
import {CardComponent} from "../../layout/card/card";

@Component({
  moduleId: module.id,
  selector: 'spacer',
  templateUrl: 'spacer.component.html',
  styleUrls: ['spacer.component.css'],
  directives: [RowComponent, ColComponent, CardComponent]
})

export class SpacerComponent{
  @Input('height') height: number;
  constructor(){

  }
}
