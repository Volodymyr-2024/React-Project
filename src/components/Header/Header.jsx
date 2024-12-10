import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_logo}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <nav className={styles.header_menu}>
        <Link to="/" className={styles.link}>
          Main Page
        </Link>
        <Link to="/categories" className={styles.link}>
          Categories
        </Link>
        <Link to="/allproducts" className={styles.link}>
          All products
        </Link>
        <Link to="/allsales" className={styles.link}>
          All sales
        </Link>
      </nav>
      <div className={styles.header_cart}>
        <Cart />
      </div>
    </div>
  );
}

export default Header;
