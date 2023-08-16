import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getRegionData } from '../redux/region/regionSlice';
import CountriesList from '../components/countries/CountriesList';
import styles from '../styles/Region.module.css';

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

  return (
    <>
      <CountriesList
        regionId={regionData.regionId}
        regionName={regionData.regionName}
        countries={regionData.countries}
      />
    </>
  );
}

export default ContinentPage;
