import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from '../../styles/RegionsList.module.css';
import Region from './Region';

function RegionsList() {
  const { worldData, isLoadingWorldData, errorLoadingWorldData } = useSelector(
    (store) => store.world,
  );

  if (isLoadingWorldData) {
    return (
      <div className={styles.loading}>
        Loading world population 2073 data...
      </div>
    );
  }

  if (errorLoadingWorldData) {
    return (
      <div className={styles.error}>
        Error loading world population 2073 data. Please try again later.
      </div>
    );
  }

  return (
    <div className={styles.regionsWrapper}>
      <h2 className={styles.regionsHeader}>
        World Population in 2073 by Region
      </h2>
      <ul className={styles.regionsList}>
        {worldData.regions.map((region, index) => (
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

export default RegionsList;
