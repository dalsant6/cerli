import {Bid} from "./bid";
import {Observable} from "rxjs/Rx";
import {Part} from "./part";
export class Job {
  clientId: any;
  contractorId: any;
  id: string;
  parts: Part[];
  process: string;
  material: string;
  duration: number;
  bids: Bid[] = [];
  startDate: Date;
  endDate: Date;
  startTimeMillis: number;
  endTimeMillis: number;
  timeLeft: string;
  constructor(data: any) {
    if(data.id){
      this.id = data.id;
    }
    if(data.clientId){
      this.clientId = data.clientId;
    }
    if(data.contractor){
      this.contractorId = data.contractorId;
    }
    if(data.process){
      this.process = data.process;
    }
    if(data.material){
      this.material = data.material;
    }
    if(data.duration){
      this.duration = data.duration;
    }
    if(data.bids){
      let keys = Object.keys(data.bids);
      let bids: Bid[] = [];
      keys.forEach((key: any) => {
        console.log('key = '+key);
          let bid = new Bid((data.bids)[key]);
        console.log('new bid = '+JSON.stringify(bid));
          bids.push(bid);
        });
      this.bids = bids;
    }
    if(data.parts){
      let keys = Object.keys(data.parts);
      let parts: Part[] = [];
      keys.forEach((key: any) => {
        console.log('key = '+key);
          let part = new Part((data.parts)[key]);
        console.log('new part = '+JSON.stringify(part));
          parts.push(part);
        });
      this.parts = parts;
    }
    if(data.startTimeMillis){
      this.startTimeMillis = data.startTimeMillis;
    }else if (data.startDate){
      this.startTimeMillis = data.startDate.getMilliseconds();
    }
    if(data.endTimeMillis){
      this.endTimeMillis = data.endTimeMillis;
    }else if (data.endDate){
      this.endTimeMillis = data.endDate.getMilliseconds();
    }
    if(data.startDate){
      this.startDate = data.startTime;
    }else if (data.startTimeMillis){
      this.startDate = new Date(data.startTimeMillis);
    }
    if(data.endDate){
      this.endDate = data.endTime;
    }else if (data.endTimeMillis){
      this.endDate = new Date(data.endTimeMillis);
    }
    let timer = Observable.timer(1000,1000);
    timer.subscribe(() => this.setTimeLeft());
  }
  setTimeLeft(){
    let now = new Date().getTime();
    let millisLeft = this.endTimeMillis - now;
    let days = Math.floor(millisLeft/(1000*60*60*24));
    let hoursTotal = Math.floor(millisLeft/(1000*60*60));
    let hoursNet = hoursTotal-(days*24);
    let minutesTotal = Math.floor(millisLeft/(1000*60));
    let minutesNet = minutesTotal-((days*24*60)+(hoursNet*60));
    let secondsTotal = Math.floor(millisLeft/1000);
    let secondsNet = secondsTotal-((days*24*60*60)+(hoursNet*60*60)+(minutesNet*60));
    if(millisLeft < 0){
      this.timeLeft = 'Finished!';
    }else if(days > 0){
      this.timeLeft = days+'d '+hoursNet+'h left';
    }else if(hoursNet > 0){
      this.timeLeft = hoursNet+'h '+minutesNet+'m left';
    }else if(minutesNet > 0){
      this.timeLeft = minutesNet+'m '+secondsNet+'s left';
    }else{
      this.timeLeft = secondsNet+' seconds left!';
    }
  }
}
