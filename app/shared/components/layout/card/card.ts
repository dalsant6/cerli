import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'a-card',
  templateUrl: 'card.html',
  directives: []
})

export class CardComponent{
  @Input('title') title = '';
  constructor(){
  }
}
