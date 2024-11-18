import SearchForm from "../SearchForm/search-form";
import styles from "./hero.module.css"; // Import the custom CSS module

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Easy Way to Find Your Dream Home</h1>
          <p className={styles.subtitle}>
            A great platform to buy, sell and rent your properties without any
            agent or commissions.
          </p>
        </div>
        {/* our search form here */}
        <SearchForm />
      </div>
    </div>
  );
};

export default Hero;
