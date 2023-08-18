import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getRegionData } from '../redux/region/regionSlice';
import CountriesList from '../components/countries/CountriesList';
import styles from '../styles/Region.module.css';
import Hero from '../components/common/Hero';
import SearchBar from '../components/common/SearchBar';

function ContinentPage() {
  const { regionId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRegionData(regionId));
  }, [dispatch, regionId]);

  const {
    regionData,
    isLoadingRegionData,
    errorLoadingRegionData,
  } = useSelector((store) => store.region);

  if (isLoadingRegionData) {
    return <div className={styles.loading}>Loading countries...</div>;
  }

  if (errorLoadingRegionData) {
    return (
      <div className={styles.error}>
        Error loading countries. Please try again later.
      </div>
    );
  }

  const {
    regionName,
    regionImageURL,
    regionPopulationIn2073,
    countries,
  } = regionData;

  return (
    <div data-testid={`${regionName}-page`}>
      <Hero
        title={regionName}
        imgURL={regionImageURL}
        imgAlt="image of the glob"
        populationIn2073={regionPopulationIn2073}
      />
      <SearchBar />
      <CountriesList
        regionId={regionId}
        regionName={regionName}
        countries={countries}
      />
    </div>
  );
}

export default ContinentPage;
