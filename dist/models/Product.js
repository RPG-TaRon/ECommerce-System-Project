"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const discountCalculator_1 = require("../utils/discountCalculator");
class Product {
    constructor(id, title, description, category, price, discountPercentage, stock, brand) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.stock = stock;
        this.brand = brand;
    }
    displayDetails() {
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
    getPriceWithDiscount() {
        const discountAmount = (0, discountCalculator_1.calculateDiscount)(this.price, this.discountPercentage);
        return this.price - discountAmount;
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map