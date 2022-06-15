import styles from "./Header.module.css";
import cuiaba from "../../public/images/cuiaba.jpg";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.background}>
        <img src={cuiaba} alt="Florianópolis" />
        <div className={styles.filter} />
      </div>
      <div className={styles.container}>
        <div className={styles.arrow}>
          <svg
            width="44"
            height="78"
            viewBox="0 0 44 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M41 3L5 39L41 75" stroke="white" stroke-width="6" />
          </svg>
        </div>
        <div className={styles.welcome}>
          <h1>PalazeHotel</h1>
          <span>Visualize todos os hoteis disponíveis</span>
        </div>
        <div className={styles.arrow}>
          <svg
            width="44"
            height="78"
            viewBox="0 0 44 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 3L39 39L3 75" stroke="white" stroke-width="6" />
          </svg>
        </div>
      </div>
    </header>
  );
}
