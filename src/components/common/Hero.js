import PropTypes from 'prop-types';

import styles from '../../styles/Hero.module.css';

function Hero({
  title,
  populationIn2073,
  imgURL,
  imgAlt,
  slantImage,
}) {
  const imageStyles = slantImage ? { transform: 'rotateZ(-18deg)' } : {};

  return (
    <section className={styles.hero}>
      <div className={styles.heroImgWrapper}>
        <img style={imageStyles} className={styles.heroImg} src={imgURL} alt={imgAlt} />
      </div>
      <div className={styles.heroContent}>
        <h2 className={styles.heroTitle}>{title}</h2>
        <p className={styles.heroSubtitle}>
          <span>{populationIn2073.toLocaleString()}</span>
          {' '}
          <span>people</span>
        </p>
      </div>
    </section>
  );
}

Hero.defaultProps = {
  slantImage: false,
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  populationIn2073: PropTypes.number.isRequired,
  imgURL: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  slantImage: PropTypes.bool,
};

export default Hero;
