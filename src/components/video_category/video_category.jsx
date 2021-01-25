import React from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import styles from "./video_category.module.css";

const VideoCategory = ({ location: { pathname } }) => {
  const history = useHistory();
  const checkedHome = pathname === "/";
  const checkedPopular = pathname === "/popular";
  const checkedMusic = pathname === "/music";
  const checkedSport = pathname === "/sports";
  const checkedGame = pathname === "/game";
  const checkedMovie = pathname === "/movie";
  const checkedNews = pathname === "/news";
  const goHome = () => {
    history.push("/");
    window.location.reload();
  };

  return (
    <section className={styles.container}>
      <div className={styles.listContainer}>
        <li className={`${styles.list} ${checkedHome && styles.checked}`}>
          <span onClick={goHome}>홈</span>
        </li>
        <li className={`${styles.list} ${checkedPopular && styles.checked}`}>
          <Link to='/popular'>인기</Link>
        </li>
      </div>
      <div className={styles.listContainer}>
        <li className={styles.title}>인기 YOUTUBE</li>
        <li className={`${styles.list} ${checkedMusic && styles.checked}`}>
          <Link to='/music'>음악</Link>
        </li>
        <li className={`${styles.list} ${checkedSport && styles.checked}`}>
          <Link to='/sports'>스포츠</Link>
        </li>
        <li className={`${styles.list} ${checkedGame && styles.checked}`}>
          <Link to='/game'>게임</Link>
        </li>
        <li className={`${styles.list} ${checkedMovie && styles.checked}`}>
          <Link to='/movie'>영화</Link>
        </li>
        <li className={`${styles.list} ${checkedNews && styles.checked}`}>
          <Link to='/news'>뉴스</Link>
        </li>
      </div>
    </section>
  );
};

export default withRouter(VideoCategory);
