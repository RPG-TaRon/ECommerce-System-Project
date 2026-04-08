import { ApiError } from "../utils/errorHandler";

export async function fetchProducts(): Promise<any[]> {
  try {
    const response = await fetch("https://dummyjson.com/products");  //(`https://dummyjson.com/products/${id}`) <<<< Search for a specific product

    if (!response.ok) {
      throw new ApiError("Failed to fetch products from API.");  //(`Failed to fetch product ID ${id}`)  <<<<< error for specific product id
    }

    const data = await response.json();
    return data.products;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    throw new ApiError("An error occurred while fetching products.");
  }
}