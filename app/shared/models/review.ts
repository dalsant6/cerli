
export class Review{
  rating: number;
  reviewer: any;
  message: string;

  constructor(data: any) {
    this.rating = data.rating;
    this.reviewer = data.reviewer;
    this.message = data.message;
  }
}
