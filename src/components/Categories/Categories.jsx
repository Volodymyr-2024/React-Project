import { useSelector } from "react-redux";
import { API } from "../../constants/api";
import styles from "./Categories.module.css";
import { Link } from "react-router-dom";

function Categories({ countCategories }) {
  const categories = useSelector((state) => state.categories.categories);
  const status = useSelector((state) => state.categories.status);

  return (
    <div className={styles.categories}>
      {status === "loading" && (
        <p style={{ marginLeft: "40px", fontSize: "24px" }}>Loading...</p>
      )}
      {status === "succeeded" && (
        <div className={styles.container}>
          {categories.slice(0, countCategories).map((category) => (
            <Link to={`/categories/${category.id}`} key={category.id}>
              <div className={styles.card}>
                <img src={API + category.image} alt={category.name} />
                <h5>{category.title}</h5>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Categories;
