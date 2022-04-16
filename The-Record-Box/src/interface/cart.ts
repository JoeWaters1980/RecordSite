export interface ICart {
    name:String;
    description:String;
    category: String;
    price:Number;
    qty: Number;
    userId:string;

}
export class cartItems implements ICart {
    
    name!: string;
    description!: string;
    category!: string;
    price!: number;
    qty!:number;
    userId!: string;
    
 
     constructor(name:string,description:string,category:string,price:number,qty:number,userId:string) {
        this.name = name;
        this.description =description;
        this.category = category;
        this.price = price;
        this.qty=qty;
        this.userId;
        
    }
}
