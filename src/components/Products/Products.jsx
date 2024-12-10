import { useSelector } from "react-redux";
import styles from "./Products.module.css";
import Product from "../Product/Product";
import { useSearchParams } from "react-router-dom";

function handleSortProducts(products, minPrice, maxPrice, discountOnly, sort) {
  let newProducts = [...products];
  if (minPrice) {
    newProducts = newProducts.filter((product) =>
      product.discont_price
        ? product.discont_price >= Number(minPrice)
        : product.price >= Number(minPrice)
    );
  }
  if (maxPrice) {
    newProducts = newProducts.filter((product) =>
      product.discont_price
        ? product.discont_price <= Number(maxPrice)
        : product.price <= Number(maxPrice)
    );
  }
  if (discountOnly === "true") {
    newProducts = newProducts.filter((product) => product.discont_price);
  }
  if (sort) {
    newProducts = newProducts.sort((a, b) => {
      if (sort === "price: low-high") {
        const priceA = a.discont_price || a.price;
        const priceB = b.discont_price || b.price;
        return priceA - priceB;
      } else if (sort === "price: high-low") {
        const priceA = a.discont_price || a.price;
        const priceB = b.discont_price || b.price;
        return priceB - priceA;
      }
      return 0;
    });
  }
  if (sort === "newest") {
    newProducts = newProducts.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }
  return newProducts;
}

function Products({ categoryId, discount }) {
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams.entries()]);
  const { minPrice, maxPrice, discountOnly, sort } = params;

  const sortProducts = handleSortProducts(
    products,
    minPrice,
    maxPrice,
    discountOnly,
    sort
  );

  let filteredProducts = sortProducts;

  if (categoryId) {
    filteredProducts = sortProducts.filter(
      (product) => product.categoryId === categoryId
    );
  }
  if (discount) {
    filteredProducts = sortProducts.filter((product) => product.discont_price);
  }

  return (
    <div className={styles.products}>
      {/* <pre>
        {JSON.stringify(
          {
            // filteredProducts,
            minPrice,
            maxPrice,
            discountOnly,
            sort,
          },
          null,
          2
        )}
      </pre> */}

      {status === "loading" && (
        <p style={{ marginLeft: "40px", fontSize: "24px" }}>Loading...</p>
      )}
      {status === "succeeded" && (
        <div className={styles.container}>
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
