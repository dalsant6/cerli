import {Component, OnInit} from '@angular/core';
import {RowComponent} from "../../shared/components/layout/row/row";
import {ColComponent} from "../../shared/components/layout/col/col";
import {HomePage} from "../home/home";
import {Routes, ROUTER_DIRECTIVES, Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'projects',
  templateUrl: 'projects.html',
  styleUrls : ['projects.css'],
  directives: [ColComponent, RowComponent, ROUTER_DIRECTIVES]
})
export class ProjectsPage implements OnInit{
  textShift: string = 'This is the text for Shift';
  textClockit: string = 'This is the text for Clockit';
  textPokemon: string = 'This is the text for Pokemon';
  textLucky: string = 'This is the text for Lucky';

  constructor(private _router: Router){
  }
  ngOnInit(){
  }
}
