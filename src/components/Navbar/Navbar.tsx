import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.header}>
      <h1 className={styles.title}>PalazeHotel</h1>
      <ul className={styles.navigation}>
        <li>Início</li>
        <li>Hoteis</li>
        <li>Blog</li>
        <li>Àrea do cliente</li>
      </ul>
    </nav>
  );
}
