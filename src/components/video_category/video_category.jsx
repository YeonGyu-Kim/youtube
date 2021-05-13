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
        <li
          className={`${styles.list} ${checkedHome && styles.checked}`}
          onClick={goHome}
        >
          <span>홈</span>
        </li>
        <Link to='/popular'>
          <li className={`${styles.list} ${checkedPopular && styles.checked}`}>
            <span>인기</span>
          </li>
        </Link>
      </div>
      <div className={styles.listContainer}>
        <li className={styles.title}>인기 YOUTUBE</li>
        <Link to='/music'>
          <li className={`${styles.list} ${checkedMusic && styles.checked}`}>
            <span>음악</span>
          </li>
        </Link>
        <Link to='/sports'>
          <li className={`${styles.list} ${checkedSport && styles.checked}`}>
            <span>스포츠</span>
          </li>
        </Link>
        <Link to='/games'>
          <li className={`${styles.list} ${checkedGame && styles.checked}`}>
            <span>게임</span>
          </li>
        </Link>
        <Link to='/movies'>
          <li className={`${styles.list} ${checkedMovie && styles.checked}`}>
            <span>영화</span>
          </li>
        </Link>
        <Link to='/news'>
          <li className={`${styles.list} ${checkedNews && styles.checked}`}>
            <span>뉴스</span>
          </li>
        </Link>
      </div>
    </section>
  );
};

export default withRouter(VideoCategory);
