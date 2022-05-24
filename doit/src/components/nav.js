import { Link } from "react-router-dom";
import Container from "./container";
import logoImg from "../assets/instagram-new-logo.png"; //인스타그램 로고 이미지
import homeImg from "../assets/home2.png";
import sendImg from "../assets/send.png";
import moreImg from "../assets/more.png";
import findImg from "../assets/find2.png";
import likeImg from "../assets/like.png";
import profileImg from "../assets/profile.png";
import styles from "../css/nav.module.css"; //nav바에 대한 css

function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link to="/">
          <img src={logoImg} alt="Instagram Logo" className={styles.imgSize} />
        </Link>
        <ul className={styles.menu}>
          <li>
            <button type="submit">검색</button>
          </li>
          <Link to="/">
            <img src={homeImg} alt="Home Logo" className={styles.imgSize2} />
          </Link>
          <li>
            <Link to="/send">
              <img src={sendImg} alt="Send Logo" className={styles.imgSize3} />
            </Link>
          </li>
          <li>
            <Link to="/more">
              <img src={moreImg} alt="More Logo" className={styles.imgSize3} />
            </Link>
          </li>
          <li>
            <Link to="/find">
              <img src={findImg} alt="Find Logo" className={styles.imgSize3} />
            </Link>
          </li>
          <li>
            <Link to="/like">
              <img src={likeImg} alt="Like Logo" className={styles.imgSize3} />
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img
                src={profileImg}
                alt="Profile Logo"
                className={styles.imgSize3}
              />
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
