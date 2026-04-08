import { ApiError } from "../utils/errorHandler.ts";

export async function fetchProducts(): Promise<any[]> {
  try {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new ApiError("Failed to fetch products from API.");
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