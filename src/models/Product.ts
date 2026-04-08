import { calculateDiscount } from "../utils/discountCalculator";

export class Product {
    constructor(
        public id: number,
        public title: string, 
        public description: string,
        public category: string,
        public price: number,
        public discountPercentage: number,
        public stock: number,
        public brand: string,
    ) {}


    displayDetails(): string {
        return `
    ID: ${this.id}
    Title: ${this.title}
    Description: ${this.description}
    Category: ${this.category}
    Price: ${this.price}
    Discount Percentage: ${this.discountPercentage}%
    Stock: ${this.stock}
    Brand: ${this.brand}
    `.trim();
    }
 getPriceWithDiscount(): number {
    const discountAmount = calculateDiscount(this.price, this.discountPercentage);
    return this.price - discountAmount;
}
}