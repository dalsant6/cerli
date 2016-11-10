import {Component, ViewEncapsulation, ViewContainerRef} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';
import {HomePage} from "../../pages/home/home";
import {TopNavComponent} from "../../shared/topnav/topnav";
import {RedirectPage} from "../../pages/redirect/redirect";
@Component({
	moduleId: module.id,
    selector: 'sd-app',
    templateUrl: 'base.html',
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES, TopNavComponent]
})

@Routes([
  { path: '', component: HomePage},
  { path: '/:id', component: RedirectPage},
])

export class AppComponent {
	viewContainerRef: any = null;
	public constructor(viewContainerRef:ViewContainerRef, _router: Router) {
	    this.viewContainerRef = viewContainerRef;
    console.log('in base');
	}
}
