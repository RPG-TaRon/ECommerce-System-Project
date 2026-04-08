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
 getpricewithdiscount(): number {
    const discountAmount = (this.price * this.discountPercentage) / 100;
    return this.price - discountAmount;
}
}