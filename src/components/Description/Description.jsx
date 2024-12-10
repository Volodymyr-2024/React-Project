import { useState } from "react";
import styles from "./Description.module.css";

function Description({ text }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <div className={styles.descriptionContainer}>
      <p className={isExpanded ? styles.fullText : styles.clampedText}>
        {text}
      </p>
      <button className={styles.toggleButton} onClick={toggleExpanded}>
        {isExpanded ? "Read less" : "Read more"}
      </button>
    </div>
  );
}

export default Description;
