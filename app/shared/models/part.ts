
import {Dimensions} from "./dimensions";
export class Part{
  color: string;
  dims: Dimensions;
  file: string;
  description: string;

  constructor(data: any) {
    if(data.color){
      this.color = data.color;
    }
    if(data.dims){
      this.dims = new Dimensions(data.dims);
    }
    if(data.file){
      this.file = data.file;
    }
    if(data.description){
      this.description = data.description;
    }
  }
}
