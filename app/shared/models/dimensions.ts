

export class Dimensions{
  length: number;
  height: number;
  width: number;
  volume: number;
  surfaceArea: number;

  constructor(data: any){
    if(data.length){
      this.length = data.length;
    }
    if(data.width){
      this.width = data.width;
    }
    if(data.height){
      this.height = data.height;
    }
    if(data.volume){
      this.volume = data.volume;
    }
    if(data.surfaceArea){
      this.surfaceArea = data.surfaceArea;
    }
  }
}
