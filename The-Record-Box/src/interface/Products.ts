export interface IProducts{
    name:String;
    description:String;
    category: String;
    price:Number;

}
export class Products implements IProducts {
    
    name!: string;
    description!: string;
    category!: string;
    price!: number;
    
 
     constructor(name:string,description:string,category:string,price:number) {
        this.name = name;
        this.description =description;
        this.category = category;
        this.price = price;
        
    }
}