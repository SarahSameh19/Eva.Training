export interface IProduct {
    ID: number;
    Name: string;
    Quantity: number;
    Price: number;
    Img: string;
    Category: ICategory;
    Discount: DiscountOffers;
  }
  
  export interface ICategory {
    ID: number;
    Name: string;
  }
  
  export enum DiscountOffers {
    NoDiscount = "No Discount",
    TenPercent = "10%",
    FifteenPercent = "15%"
  }
  