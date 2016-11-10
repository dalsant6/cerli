import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class DataService extends BaseService{

  constructor(http: Http){
    super(http);
  }
  submitUrl(url: string): Observable<any>{
    return Observable.create((observable: any) => {
      this.post("/submitUrl/", url).subscribe((data) => {
        console.log("data = "+JSON.stringify(data));
        observable.next(data);
      });
    });
  }
  getLongUrl(short: string): Observable<any>{
    return Observable.create((observable: any) => {
      this.get("/getLong/"+short).subscribe((data) => {
        observable.next(data);
      });
    });
  }
  addRedirect(index: string): Observable<any>{
    return Observable.create((observable: any) => {
      this.get("/add-redirect/"+index).subscribe((data) => {
        console.log("added redirect");
        observable.next(data);
      });
    });
  }
}
