import PropTypes from 'prop-types';

import Country from './Country';
import styles from '../styles/CountriesList.module.css';

function CountriesList({ countryData }) {
  return (
    <div className={styles.countriesListWrapper}>
      <h2 className={styles.countriesListHeader}>{`${countryData.region} Population in 2073`}</h2>
      <ul className={styles.countriesList}>
        {countryData.countries.map((country) => (
          <Country
            key={country.id}
            name={country.name}
            populationIn2073={country.populationIn2073}
          />
        ))}
      </ul>
    </div>
  );
}

const countriesListShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  populationIn2073: PropTypes.number.isRequired,
});

CountriesList.propTypes = {
  countryData: PropTypes.shape({
    region: PropTypes.string.isRequired,
    countries: PropTypes.arrayOf(countriesListShape).isRequired,
  }).isRequired,
};

export default CountriesList;
