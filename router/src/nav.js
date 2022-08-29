import { Link } from "react-router-dom";
import Container from "./container";
import CheckImg from "./images/check.png";
import Img1 from "./images/1.png";
import Img2 from "./images/2.png";
import Img3 from "./images/3.png";

import styles from "./css/nav.module.css"; //nav바에 대한 css

function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link to="/">
          <img src={CheckImg} alt="Check Logo" className={styles.imgSize} />
        </Link>
        <li>
          <Link to="/page1">
            <img src={Img1} alt="Page1 Logo" className={styles.imgSize} />
          </Link>
        </li>
        <li>
          <Link to="/page2">
            <img src={Img2} alt="Page2 Logo" className={styles.imgSize} />
          </Link>
        </li>
        <li>
          <Link to="/page3">
            <img src={Img3} alt="Page3 Logo" className={styles.imgSize} />
          </Link>
        </li>
      </Container>
    </div>
  );
}

export default Nav;
