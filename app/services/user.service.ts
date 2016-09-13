import {Injectable, EventEmitter} from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from 'rxjs'
import {Client} from "../shared/models/client";
import {Contractor} from "../shared/models/contractor";
declare var firebase = require('firebase');
@Injectable()
export class UserService extends BaseService{
  currentUser: Client|Contractor = firebase.auth().currentUser;
  userEmitter: EventEmitter<any> = new EventEmitter<any>();

   constructor(){
     super();
     this.getAuthWatcher().subscribe((user: any) => {
       if(user != null){
          if(user.uid){
            //find the user info and set current user to that
            this.getUser(user.uid).subscribe((user: Client|Contractor) => {
              console.log("got a user! user: "+JSON.stringify(user));
              this.currentUser = user;
              this.userEmitter.emit(null);
            });
          }
       }else{
         console.log("user is null for some reason wtf");
          this.currentUser = null;
       }//
     });
   }
  registerClient(password: string, client: Client): Observable<any>{
    return Observable.create((observer: any) => {
      firebase.auth().createUserWithEmailAndPassword(client.email, password).then(function (user: any) {
        if(user){
          console.log("uid: " + user.uid);
          client.id = user.uid;
          observer.next(client);
        }
      }, function (error: any) {
        if(error){
          console.log("error: " + JSON.stringify(error));
        }
      });
    });
  }
  registerContractor(password: string, contractor: Contractor): Observable<any>{
    return Observable.create((observer: any) => {
      firebase.auth().createUserWithEmailAndPassword(contractor.email, password).then(function (user: any) {
        if(user){
          console.log("uid: " + user.uid);
          contractor.id = user.uid;
          observer.next(contractor);
        }
      }, function (error: any) {
        if(error){
          console.log("error: " + JSON.stringify(error));
        }
      });
    });
  }
  login(data: any): Observable<any>{
    return Observable.create((observer: any) => {
      firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(function (user: any) {
        observer.next({authData: user});
      }, function (error: any) {
        if(error){
          observer.next({error: error});
        }
      });
    });
  }
  getUser(uid: any): Observable<any>{
    return Observable.create((observer: any) => {
      this.select('/users/clients/'+uid).subscribe((data: any) => {
        if(data){
          console.log('user found in clients');
          observer.next(data);
        }else{
          this.select('/users/contractors/'+uid).subscribe((data) => {
              if(data){
                console.log('user found in contractors');
                observer.next(data);
              }else{
                observer.next(null);
              }
          });
        }
      });
    });
  }
  getCurrentUser(){
    return firebase.auth().currentUser;
  }
}
