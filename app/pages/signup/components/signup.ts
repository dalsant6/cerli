import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {ControlGroup, FormBuilder} from '@angular/common';
import {Client} from "../../../shared/models/client";
import {Contractor} from "../../../shared/models/contractor";
import {UserService} from "../../../services/user.service";

@Component({
	moduleId: module.id,
	selector: 'signup-cmp',
	templateUrl: 'signup.html',
	directives: [ROUTER_DIRECTIVES]
})

export class SignupComponent{
  userForm: ControlGroup;
  selected: string = 'client';
  clientInfo: string = 'Register as a Client in order to submit your jobs for Contractors to bid on them.';
  contractorInfo: string = 'Register as a Contractor to bid on jobs that Clients submit.';
  constructor(private _fb: FormBuilder, private _userService: UserService, private _router: Router){
    this.userForm = _fb.group({
      firstName: [''],
      lastName: [''],
      company: [''],
      email: [''],
      password: [''],
      repeatPassword: ['']

    });
  }
  toggle(type: string){
    this.selected = type;
  }
  registerUser(data: any){
    if(data.password == data.repeatPassword){
      if(this.selected == 'client'){
        let newClient = new Client(data);
        console.log('newClient = '+JSON.stringify(newClient));
        this._userService.registerClient(data.password, newClient).subscribe((client: Client) => {
          console.log('data = '+JSON.stringify(client));
          this._userService.insert("/users/clients/"+client.id, client).subscribe((error: any) => {
            if(error){
              console.error(error);
            }
            this._userService.currentUser = newClient;
            this._router.navigate(['/dashboard', '/client-home']);
          });
        });
      }else{
        let newContractor = new Contractor(data);
        console.log('newContractor = '+JSON.stringify(newContractor));
        this._userService.registerContractor(data.password, newContractor).subscribe((contractor: Contractor) => {
          console.log('data = '+JSON.stringify(contractor));
          this._userService.insert("/users/contractors/"+contractor.id, contractor).subscribe((error: any) => {
            if(error){
              console.error(error);
            }
            this._userService.currentUser = newContractor;
            this._router.navigate(['/dashboard','/client-home']);
          });
        });
      }
    }else{
      console.log('passwords not equal');
    }
  }
}
