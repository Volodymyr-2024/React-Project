import { useSelector } from "react-redux";
import styles from "./Sales.module.css";
import Product from "../Product/Product";

function Sales({ countSales }) {
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const saleProducts = products.filter(
    (product) => product.discont_price !== null
  );

  return (
    <div className={styles.products}>
      {status === "loading" && (
        <p style={{  marginLeft: "40px", fontSize: "24px" }}>Loading...</p>
      )}
      {status === "succeeded" && (
        <div className={styles.container}>
          {saleProducts.slice(0, countSales).map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Sales;
