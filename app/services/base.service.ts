import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Rx";

declare var firebase = require('firebase');
@Injectable()
export class BaseService {
  constructor(){
  }
  getAuthWatcher(): Observable<any>{
    return Observable.create((observer: any) => {
      firebase.auth().onAuthStateChanged(function(user: any) {
        if (user) {
          console.log("user = "+JSON.stringify(user));
          observer.next(user);
          console.log("auth state changed, user is logged in");
        } else {
          observer.next(null);
          console.log("user is not logged in");
        }
      });
    });
  }
  select(refDir: string, orderBy ?: string, key ?: string): Observable<any>{
    let ref = firebase.database().ref(refDir);
    if(orderBy){
      ref = ref.orderByChild(orderBy);
      if(key){
        ref = ref.equalTo(key);
      }
    }
    return Observable.create((observer: any) => {
      ref.on("value", function (snapshot: any) {
        observer.next(snapshot.val());
      });
    });
  }
  insert(refDir: string, data: any): Observable<any>{
    let ref = firebase.database().ref(refDir);
    return Observable.create((observer: any) => {
      ref.set(data, function(error: any) {
        observer.next(error);
      });
    });
  }
  push(refDir: string, data: any): Observable<any>{
    let ref = firebase.database().ref(refDir);
    return Observable.create((observer: any) => {
      ref.push().set(data, function(error: any) {
        observer.next(error);
      });
    });
  }
  update(refDir: string, data: any): Observable<any>{
    let ref = firebase.database().ref(refDir);
    return Observable.create((observer: any) => {
      ref.update(data, function(error: any) {
        observer.next(error);
      });
    });
  }
  delete(refDir: string): Observable<any>{
    let ref = firebase.database().ref(refDir);
    return Observable.create((observer: any) => {
      ref.remove(function (error: any) {
        observer.next(error);
      });
    });
  }
}
