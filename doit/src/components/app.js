import Nav from "./nav";
import { useState, useEffect } from "react";
import styles from "../css/app.module.css";
import FeedList from "./feedList";
//import { getFeeds } from "../api/api";
//import Load from "./load";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
} //날짜 형식으로 출력해주려고 만듦

function App({ feedId }) {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    window
      .fetch(`http://152.67.210.208:5000/${feedId}`)
      .then((res) => res.json())
      .then((item) => {
        setItem(item);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [feedId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <>
      <Nav className={styles.nav} />
      <FeedList items={item} />
    </>
  );
}

export default App;
