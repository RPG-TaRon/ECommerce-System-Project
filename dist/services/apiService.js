"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProducts = fetchProducts;
const errorHandler_1 = require("../utils/errorHandler");
async function fetchProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new errorHandler_1.ApiError("Failed to fetch products from API.");
        }
        const data = await response.json();
        return data.products;
    }
    catch (error) {
        if (error instanceof errorHandler_1.ApiError) {
            throw error;
        }
        throw new errorHandler_1.ApiError("An error occurred while fetching products.");
    }
}
//# sourceMappingURL=apiService.js.map