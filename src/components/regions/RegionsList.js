import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from '../../styles/RegionsList.module.css';
import Region from './Region';

function RegionsList({ regions }) {
  return (
    <div className={styles.regionsWrapper}>
      <h2 className={styles.regionsHeader}>
        World Population in 2073 by Region
      </h2>
      <ul className={styles.regionsList}>
        {regions.map((region, index) => (
          <Link key={region.id} to={`region/${region.id}`}>
            <Region
              name={region.name}
              imageURL={region.imageURL}
              populationIn2073={region.populationIn2073}
              index={index}
            />
          </Link>
        ))}
      </ul>
    </div>
  );
}

const regionsArrayShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  populationIn2073: PropTypes.number.isRequired,
});

RegionsList.propTypes = {
  regions: PropTypes.arrayOf(regionsArrayShape).isRequired,
};

export default RegionsList;
