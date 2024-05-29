import React from 'react';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';
import l from '../images/logo.svg';
import c from '../images/calculation.svg';
import m from '../images/measering.svg';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <img src={l} alt="Logo" className={styles.logo} />
      </div>
      <ul className={styles.navList}>
        <li><Link to="/AboutMe" className={styles.navLink}>Обо мне</Link></li>
        <li><Link to="/Fantasy" className={styles.navLink}>Фэнтези</Link></li>
        <li><Link to="/SiFi" className={styles.navLink}>Научная фантастика</Link></li>
        <li><Link to="/SliceOfLife" className={styles.navLink}>Повседневность</Link></li>
        <li><Link to="/Reviews" className={styles.navLink}>Отзывы</Link></li>
      </ul>
      <div className={styles.containerbutton}>
        <Link to="/make-request" className={`${styles.btn} ${styles.requestbtn}`}>
          <img src={m} alt="Make Request" className={styles.icon} /> Оправить запрос
        </Link>
        <Link to="/calculation" className={`${styles.btn} ${styles.calculationbtn}`}>
          <img src={c} alt="Calculation" className={styles.icon} /> Оплатить
        </Link>
      </div>
    </nav>
  );
};

export default Nav;