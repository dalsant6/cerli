import {Component, OnInit} from '@angular/core';
import {RowComponent} from "../../shared/components/layout/row/row";
import {ColComponent} from "../../shared/components/layout/col/col";

@Component({
  moduleId: module.id,
  selector: 'project-pokemon',
  templateUrl: 'project-pokemon.html',
  styleUrls : ['project-pokemon.css'],
  directives: [ColComponent, RowComponent]
})

export class ProjectPokemonPage implements OnInit{
  constructor(){
  }
  ngOnInit(){
  }
}
