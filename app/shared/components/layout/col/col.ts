import {Component, Input, Host} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'a-col',
  templateUrl: 'col.html',
  directives: []
})

export class ColComponent{
  @Input('cols') cols = 3;
  @Input('offset') offset = 0;
  constructor(){

  }
}
