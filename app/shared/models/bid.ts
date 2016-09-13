

import {Client} from "./client";
import {Contractor} from "./contractor";
export class Bid {
  contractorId: string;
  dateSubmitted: number;
  parts: number;
  pickup: boolean;
  shipping: number;
  orderTotal: number;
  days: number;
  misc: number;
  miscComments: string;
  comments: string;
  constructor(data: any) {
    if(data.misc){
      this.misc = parseFloat(data.misc);
    }else{
      this.misc = 0.00;
    }
    if(data.contractorId){
      this.contractorId = data.contractorId;
    }
    if(data.shipping){
      this.shipping = parseFloat(data.shipping);
    }else{
      this.shipping = 0.00;
    }
    if(data.parts){
      this.parts = parseFloat(data.parts);
    }else{
      this.parts = 0.00;
    }
    if(data.pickup){
      this.pickup = data.pickup;
    }
    if(data.days){
      this.days = parseInt(data.days);
    }
    if(data.dateSubmitted){
      this.dateSubmitted = data.dateSubmitted;
    }
    if(data.miscComments){
      this.miscComments = data.miscComments;
    }
    if(data.comments){
      this.comments = data.comments;
    }
    let total: number = this.parts+this.misc+this.shipping;
    console.log('total = '+total);
    this.orderTotal = total;
  }

}
