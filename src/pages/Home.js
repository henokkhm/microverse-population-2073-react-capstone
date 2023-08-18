import { useSelector } from 'react-redux';
import Hero from '../components/common/Hero';
import RegionsList from '../components/regions/RegionsList';

function Home() {
  const { worldData, isLoadingWorldData, errorLoadingWorldData } = useSelector(
    (store) => store.world,
  );

  if (isLoadingWorldData) {
    return (
      <div className="loading">
        Loading world population 2073 data...
      </div>
    );
  }

  if (errorLoadingWorldData) {
    return (
      <div className="error">
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
    <div data-testid="home-page">
      <Hero
        title={title}
        imgURL={worldImageURL}
        imgAlt="image of the glob"
        populationIn2073={worldPopulationIn2073}
        slantImage
      />
      <RegionsList regions={regions} />
    </div>
  );
}

export default Home;
