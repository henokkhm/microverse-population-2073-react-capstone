import { useSelector } from 'react-redux';
import Hero from '../components/common/Hero';
import RegionsList from '../components/regions/RegionsList';
import styles from '../styles/Home.module.css';

function Home() {
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

  const {
    title,
    worldImageURL,
    worldPopulationIn2073,
    regions,
  } = worldData;

  return (
    <>
      <Hero
        title={title}
        imgURL={worldImageURL}
        imgAlt="image of the glob"
        populationIn2073={worldPopulationIn2073}
        slantImage
      />
      <RegionsList regions={regions} />
    </>
  );
}

export default Home;
