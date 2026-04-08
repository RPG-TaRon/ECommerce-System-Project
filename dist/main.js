"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./models/Product");
const apiService_1 = require("./services/apiService");
const taxCalculator_1 = require("./utils/taxCalculator");
const errorHandler_1 = require("./utils/errorHandler");
async function main() {
    try {
        const productsData = await (0, apiService_1.fetchProducts)();
        for (const item of productsData) {
            const product = new Product_1.Product(item.id, item.title, item.description, item.category, item.price, item.discountPercentage, item.stock, item.brand);
            console.log(product.displayDetails());
            const discountedPrice = product.getPriceWithDiscount();
            console.log(`Price after discount: $${discountedPrice.toFixed(2)}`);
            const taxAmount = (0, taxCalculator_1.calculateTax)(product.price, product.category);
            console.log(`Tax amount: $${taxAmount.toFixed(2)}`);
            console.log();
        }
    }
    catch (error) {
        (0, errorHandler_1.handleError)(error);
    }
}
main();
//# sourceMappingURL=main.js.map