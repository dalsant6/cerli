import {Component, ViewEncapsulation, ViewContainerRef} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';
import {HomePage} from "../../pages/home/home";
import {TopNavComponent} from "../../shared/topnav/topnav";
import {ProjectsPage} from "../../pages/projects/projects";
import {ContactPage} from "../../pages/contact/contact";
import {ProjectShiftPage} from "../../pages/project-shift/project-shift";
import {ProjectClockitPage} from "../../pages/project-clockit/project-clockit";
import {ProjectPokemonPage} from "../../pages/project-pokemon/project-pokemon";
import {ProjectProtodashPage} from "../../pages/project-protodash/project-protodash";
import {ProjectProtobidsPage} from "../../pages/project-protobids/project-protobids";
@Component({
	moduleId: module.id,
    selector: 'sd-app',
    templateUrl: 'base.html',
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES, TopNavComponent]
})

@Routes([
  { path: '/home', component: HomePage},
  { path: '/projects', component: ProjectsPage},
  { path: '/contact', component: ContactPage},
  { path: '/shift', component: ProjectShiftPage},
  { path: '/clockit', component: ProjectClockitPage},
  { path: '/pokemoncp', component: ProjectPokemonPage},
  { path: '/protodash', component: ProjectProtodashPage},
  { path: '/protobids', component: ProjectProtobidsPage},
])

export class AppComponent {
	viewContainerRef: any = null;
	public constructor(viewContainerRef:ViewContainerRef, _router: Router) {
	    // You need this small hack in order to catch application root view container ref
	    this.viewContainerRef = viewContainerRef;
    _router.navigate(['/home']);
	}
}
