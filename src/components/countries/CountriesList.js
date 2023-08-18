import PropTypes from 'prop-types';

import Country from './Country';
import styles from '../../styles/CountriesList.module.css';

function CountriesList({ regionId, regionName, countries }) {
  return (
    <div className={styles.countriesListWrapper}>
      <h2 className={styles.countriesListHeader}>
        {`${regionName} Population in 2073`}
      </h2>
      <ul className={styles.countriesList} data-region-id={regionId}>
        {countries.map((country) => (
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

const countriesArrayShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  populationIn2073: PropTypes.number.isRequired,
});

CountriesList.propTypes = {
  regionId: PropTypes.string.isRequired,
  regionName: PropTypes.string.isRequired,
  countries: PropTypes.arrayOf(countriesArrayShape).isRequired,
};

export default CountriesList;
