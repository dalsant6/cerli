import {Component, ViewEncapsulation} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {CORE_DIRECTIVES} from '@angular/common';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {UserService} from "../../services/user.service";

@Component({
    moduleId: module.id,
    selector: 'top-nav',
    templateUrl: 'topnav.html',
    encapsulation: ViewEncapsulation.None,
    directives: [DROPDOWN_DIRECTIVES, CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class TopNavComponent {
  constructor(private _userService: UserService, private _router: Router){

  }
  getUserName(){
    return this._userService.currentUser ? this._userService.currentUser.firstName : "User";
  }
  goToJobs(){
    this._router.navigate(['/dashboard', '/jobs']);
  }
}
