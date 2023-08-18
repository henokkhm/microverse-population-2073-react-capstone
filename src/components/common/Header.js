import { Link, useLocation } from 'react-router-dom';

import styles from '../../styles/Header.module.css';
import hamburger from '../../assets/icons/hamburger.svg';
import back from '../../assets/icons/back.svg';
import mic from '../../assets/icons/mic.svg';
import settings from '../../assets/icons/settings.svg';

function Header() {
  const location = useLocation();

  const backButton = (
    <Link to="/" data-testid="back-button">
      <button className={styles.iconBtn} type="button">
        <img src={back} alt="go back button" />
      </button>
    </Link>
  );

  const hamburgerButton = (
    <button className={styles.iconBtn} type="button">
      <img src={hamburger} alt="hamburger menu icon" />
    </button>
  );

  return (
    <header className={styles.appHeader}>
      {location.pathname === '/' ? hamburgerButton : backButton}
      <h1 className={styles.pageTitle}>{location.pathname === '/' ? 'Regions' : 'Countries'}</h1>
      <button className={styles.iconBtn} type="button">
        <img src={mic} alt="microphone icon" />
      </button>
      <button className={styles.iconBtn} type="button">
        <img src={settings} alt="settings menu icon" />
      </button>
    </header>
  );
}

export default Header;
