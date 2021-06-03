import styles from "../footer/footer.module.css"

function Footer() {
const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer