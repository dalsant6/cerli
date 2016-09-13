
import {Review} from "./review";
export class Client{
  id: string = '';
  firstName: string = '';
  lastName: string = '';
  zipCode: number = 0;
  email: string = '';
  rating: number = 0;
  company: string = '';
  reviews: Review[] = [];

  constructor(data: any, uid ?: any) {
    this.id = uid ? uid : data.id;
    if(data.firstName){
      this.firstName = data.firstName;
    }
    if(data.lastName){
      this.lastName = data.lastName;
    }
    if(data.zipCode){
      this.zipCode = data.zipCode;
    }
    if(data.rating){
      this.rating = data.rating;
    }
    if(data.company){
      this.company = data.company;
    }
    if(data.reviews){
      this.reviews = data.reviews;
    }
    if(data.email){
      this.email = data.email;
    }
  }
}
