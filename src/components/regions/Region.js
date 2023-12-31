import PropTypes from 'prop-types';

import styles from '../../styles/Region.module.css';
import rightArrow from '../../assets/icons/circled-arrow.svg';

function Region({
  name,
  imageURL,
  populationIn2073,
  index,
}) {
  const isBackgroundDark = index % 4 === 1 || index % 4 === 2;
  const bgStyle = {
    backgroundColor: isBackgroundDark
      ? 'var(--primary-color-200)'
      : 'var(--primary-color-300)',
  };

  return (
    <li className={styles.region} style={bgStyle} data-testid={`navlink-to-${name}-page`}>
      <button className={styles.arrowBtn} type="button">
        <img
          className={styles.arrowBtnIcon}
          src={rightArrow}
          alt="circled arrow pointing right"
        />
      </button>
      <div className={styles.regionContent}>
        <img
          className={styles.regionMap}
          src={`${process.env.PUBLIC_URL}${imageURL}`}
          alt={`map of ${name} region`}
        />
        <span className={styles.regionName}>{name}</span>
        <span className={styles.regionPopulationIn2073}>
          {`${populationIn2073.toLocaleString()} people`}
        </span>
      </div>
    </li>
  );
}

Region.propTypes = {
  name: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  populationIn2073: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default Region;
