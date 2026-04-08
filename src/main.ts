import { Product } from "./models/Product";
import { fetchProducts } from "./services/apiService";  //import { fetchProductById } from "./services/apiService"; <<<<< Change to this if searching specific product
import { calculateTax } from "./utils/taxCalculator";
import { handleError } from "./utils/errorHandler";

async function main(): Promise<void> {
  try {
    const productsData = await fetchProducts();    //const item = await fetchProductById(1-30); <<<<<<< Input that function and delete lines 8-10 if you want to search for specific product

    for (const item of productsData) {
      const product = new Product(
        item.id,
        item.title,
        item.description,
        item.category,
        item.price,
        item.discountPercentage,
        item.stock,
        item.brand
      );

      console.log(product.displayDetails());

      const discountedPrice = product.getPriceWithDiscount();
      console.log(`Price after discount: $${discountedPrice.toFixed(2)}`);

      const taxAmount = calculateTax(product.price, product.category);
      console.log(`Tax amount: $${taxAmount.toFixed(2)}`);

      console.log();
    }
  } catch (error) {
    handleError(error);
  }
}
main();