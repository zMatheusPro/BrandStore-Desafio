import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.navigation}>
        <ul>
          <li>Link...</li>
          <li>Link...</li>
          <li>Link...</li>
          <li>Link...</li>
        </ul>
        <ul>
          <li>Link...</li>
          <li>Link...</li>
          <li>Link...</li>
          <li>Link...</li>
        </ul>
        <ul>
          <li>Link...</li>
          <li>Link...</li>
          <li>Link...</li>
          <li>Link...</li>
        </ul>
      </div>
      <div className={styles.copyright}>
        <h1>
          © Copyright palazehotel.com.br 2022, todos os direitos reservados.
        </h1>
      </div>
    </footer>
  );
}
