import PropTypes from 'prop-types';

import styles from '../../styles/Country.module.css';
import rightArrow from '../../assets/icons/circled-arrow.svg';

function Country({ name, populationIn2073 }) {
  return (
    <li className={styles.country}>
      <div className={styles.countryName}>{name}</div>
      <div>{`${populationIn2073.toLocaleString()} people`}</div>
      <button className={styles.arrowBtn} type="button">
        <img
          className={styles.arrowBtnIcon}
          src={rightArrow}
          alt="circled arrow button pointing right"
        />
      </button>
    </li>
  );
}

Country.propTypes = {
  name: PropTypes.string.isRequired,
  populationIn2073: PropTypes.number.isRequired,
};

export default Country;
