import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from 'rxjs';
import {Job} from "../shared/models/job";
import {Bid} from "../shared/models/bid";

@Injectable()
export class DataService extends BaseService{

  constructor(){
    super();
  }
  addJob(job: Job, status: string): Observable<any>{
    this.setJobId(job);
    return Observable.create((observable: any) => {
      this.insert("/jobs/"+status+"/"+job.id, job).subscribe((error: any) => {
        if(error){
          observable.next(error);
        }else{
          observable.next(null);
        }
      });
    });
  }
  addBid(jobId: string, bid: Bid): Observable<any>{
    return Observable.create((observable: any) => {
      this.push("/jobs/active/"+jobId+'/bids', bid).subscribe((error: any) => {
        if(error){
          observable.next(error);
        }else{
          observable.next(null);
        }
      });
    });
  }
  getJob(jobId: string): Observable<any>{
    console.log('jobId = '+jobId);
    return Observable.create((observer: any) => {
      this.select('/jobs/active', 'id', jobId).subscribe((data: any) => {
        if(data){
          observer.next(data);
        }else{
          this.select('/jobs/progress', 'id', jobId).subscribe((data: any) => {
            if(data){
              observer.next(data);
            }else{
              this.select('/jobs/complete', 'id', jobId).subscribe((data: any) => {
                if(data){
                  observer.next(data);
                }else{
                  observer.next(null);
                }
              });
            }
          });
        }
      });
    });
  }
  getActiveClientJobs(clientId: string): Observable<any>{
    return Observable.create((observer: any) => {
      this.select('/jobs/active', 'clientId', clientId).subscribe((data: any) => {
        if(data){
          observer.next(data);
        }else{
          observer.next(null);
        }
      });
    });
  }
  getProgressClientJobs(clientId: string): Observable<any>{
    return Observable.create((observer: any) => {
      this.select('/jobs/progress', 'clientId', clientId).subscribe((data: any) => {
        if(data){
          observer.next(data);
        }else{
          observer.next(null);
        }
      });
    });
  }
  getCompleteClientJobs(clientId: string): Observable<any>{
    return Observable.create((observer: any) => {
      this.select('/jobs/complete', 'clientId', clientId).subscribe((data: any) => {
        if(data){
          observer.next(data);
        }else{
          observer.next(null);
        }
      });
    });
  }
  setJobId(job: Job){
    let time: number = job.startTimeMillis;
    job.id = time.toString();
  }
}
