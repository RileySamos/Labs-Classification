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
        <li><Link to="/Services" className={styles.navLink}>Сервисы</Link></li>
        <li><Link to="/Products" className={styles.navLink}>Продукты</Link></li>
        <li><Link to="/AboutUs" className={styles.navLink}>Информация о нас</Link></li>
        <li><Link to="/Portfolio" className={styles.navLink}>Наше портфолио</Link></li>
        <li><Link to="/FAQ" className={styles.navLink}>FAQ</Link></li>
        <li><Link to="/Contacts" className={styles.navLink}>Контакты</Link></li>
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