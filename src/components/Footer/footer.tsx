import styles from "./footer.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div
          className={`${styles.flex} ${styles.sm} ${styles["align-center"]}`}
        >
          {/* Left section: EState information */}
          <div className={`${styles.section} ${styles.sm}`}>
            <p className={styles.title}>EState</p>
            <p className={styles["text-muted"]}>
              A great platform to buy, sell and rent your properties without any
              agent or commissions.
            </p>
          </div>

          {/* Right section: Contact Us */}
          <div
            className={`${styles.section} ${styles.sm} ${styles["text-right"]}`}
          >
            <p className={styles.title}>Contact Us</p>
            <address className={`${styles["text-muted"]} ${styles.address}`}>
              <FaMapMarkerAlt className={styles.icon} />
              135 Walnut Street,
              <br /> Yet Another City USA
            </address>
          </div>
        </div>
        <p className={styles["footer-bottom"]}>
          © 2024 EState. Design by The Saqib Sattar.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
