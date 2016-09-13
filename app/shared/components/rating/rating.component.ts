import {Component, Input} from '@angular/core';
import {ColComponent} from "../layout/col/col";
import {RowComponent} from "../layout/row/row";
import {CardComponent} from "../layout/card/card";

@Component({
  moduleId: module.id,
  selector: 'rating',
  templateUrl: 'rating.component.html',
  styleUrls: ['rating.component.css'],
  directives: [RowComponent, ColComponent, CardComponent]
})

export class RatingComponent{
  @Input('rating') rating: number;
  constructor(){

  }
}
