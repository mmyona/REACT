import Nav from "./nav";
import styles from "../css/app.module.css";
import "normalize.css";

function App({ children }) {
  return (
    <>
      <Nav className={styles.nav} />
      <div className={styles.body}>{children}</div>
    </>
  );
}

export default App;
