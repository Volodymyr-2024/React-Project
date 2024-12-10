import styles from "./NotFound.module.css";
import image from "../../assets/404.jpg";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <div>
          <img src={image} alt="foto 404 error" className={styles.image} />
        </div>
        <div className={styles.container_text}>
          <h2>Page Not Found</h2>
          <p>
            We’re sorry, the page you requested could not be found. <br />
            Please go back to the homepage.
          </p>
          <Button
            name="Go Home"
            style={{ width: "209px" }}
            click={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
