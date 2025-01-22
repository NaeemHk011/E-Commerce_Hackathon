 export type Tproduct= {
    [x: string]: any;
    title: string;
    description: string;
    discountedprice: number;
    price: number;
    imageUrl: string;
    id:number;
    category?:string;
  }

  export type Tmember ={
    username: string;
    profession: string;
    imageUrl: string;
}