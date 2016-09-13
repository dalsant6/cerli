import {Component} from '@angular/core';
import {FormBuilder, ControlGroup} from '@angular/common';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {UserService} from "../../../services/user.service";

@Component({
	selector : 'login-cmp',
	templateUrl : './pages/login/components/login.html',
	directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent {
  loginForm: ControlGroup;
  constructor(private _userService: UserService, private _router: Router, private _fb: FormBuilder){
    this.loginForm = _fb.group({
      email: [''],
      password: ['']
    });
  }
  login(data: any) {
    this._userService.login(data).subscribe((data) => {
      console.log("data: "+JSON.stringify(data));
      if(data.authData){
        this._router.navigate(['/dashboard','/client-home']);
      }else{
        console.log("no authData");
      }
    });
  }
}
