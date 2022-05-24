import { Link } from "react-router-dom";
import Container from "./container";
import logoImg from "../assets/instagram-new-logo.png"; //인스타그램 로고 이미지
import homeImg from "../assets/home.png";
import sendImg from "../assets/send.png";
import moreImg from "../assets/more.png";
import styles from "../css/nav.module.css"; //nav바에 대한 css

function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link to="/">
          <img src={logoImg} alt="Instagram Logo" />
        </Link>
        <ul className={styles.menu}>
          <li>
            <button type="submit">검색</button>
          </li>
          <Link to="/">
            <img src={homeImg} alt="Home Logo" />
          </Link>
          <li>
            <Link to="/send">
              <img src={sendImg} alt="Send Logo" />
            </Link>
          </li>
          <li>
            <Link to="/more">
              <img src={moreImg} alt="More Logo" />
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
