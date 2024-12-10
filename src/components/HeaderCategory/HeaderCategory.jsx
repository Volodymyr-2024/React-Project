import { Link } from "react-router-dom";
import styles from "./HeaderCategory.module.css";

function HeaderCategory({ nameCategory, allCategory, link, hr }) {
  return (
    <div className={styles.container}>
      <h2>{nameCategory}</h2>
      {hr && <hr></hr>}
      {link && <Link to={link}>{allCategory}</Link>}
    </div>
  );
}

export default HeaderCategory;
