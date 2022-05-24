import Nav from "./nav";
import styles from "../css/app.module.css";
import "normalize.css";
//import { getPosts } from "../api/api";
import Load from "./load";

function App() {
  return (
    <>
      <Nav className={styles.nav} />
      <Load />
    </>
  );
}

export default App;
