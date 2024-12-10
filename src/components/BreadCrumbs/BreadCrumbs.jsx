import styles from "./BreadCrumbs.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const paths = [
  { label: "Main page", path: "/" },
  { label: "Categories", path: "/categories" },
  { label: "All products", path: "/allproducts" },
  { label: "All sales", path: "/allsales" },
];

function BreadCrumbs({ name, id }) {
  const products = useSelector((state) => state.products.products);
  const categories = useSelector((state) => state.categories.categories);

  function breadCrumsNavigation(name, id) {
    let all = null;
    let category = null;
    let product = null;
    let categoryId = null;

    if (!id) {
      all = paths.find((path) => path.path.split("/").includes(name));
    } else if (name === "categories") {
      all = paths.find((path) => path.path.split("/").includes(name));
      category = categories.find((category) => category.id === id)?.title;
    } else if (name === "products") {
      all = all = paths.find((path) => path.path.split("/").includes(name));
      categoryId = products.find((product) => product.id === id)?.categoryId;
      category = categories.find(
        (category) => category.id === categoryId
      )?.title;
      product = products.find((product) => product.id === id)?.title;
    }
    return { all, category, product, categoryId };
  }

  const { all, category, product, categoryId } = breadCrumsNavigation(name, id);

  return (
    <nav className={styles.container}>
      <ul className={styles.ul_container}>
        <li>
          <Link to="/">Main page</Link>
        </li>
        {category && product && (
          <li>
            <div className={styles.line}></div>
            <Link to="/categories">Categories</Link>
          </li>
        )}

        {all && (
          <li>
            <div className={styles.line}></div>
            <Link to={all.path}>{all.label}</Link>
          </li>
        )}
        {category && (
          <li>
            <div className={styles.line}></div>
            <Link to={`/categories/${categoryId ? categoryId : id}`}>
              {category}
            </Link>
          </li>
        )}
        {product && (
          <li>
            <div className={styles.line}></div>
            <Link to={`/products/${id}`}>{product}</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default BreadCrumbs;
