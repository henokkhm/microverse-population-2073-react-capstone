import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { filterCountries, getRegionData } from '../redux/region/regionSlice';
import CountriesList from '../components/countries/CountriesList';
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
    return <div className="loading">Loading countries...</div>;
  }

  if (errorLoadingRegionData) {
    return (
      <div className="error">
        Error loading countries. Please try again later.
      </div>
    );
  }

  const {
    regionName,
    regionImageURL,
    regionPopulationIn2073,
    countries,
    filteredCountries,
  } = regionData;

  const filterCountriesOnChangeHandler = (searchTerm) => {
    dispatch(filterCountries({ searchTerm }));
  };

  return (
    <div data-testid={`${regionName}-page`}>
      <Hero
        title={regionName}
        imgURL={regionImageURL}
        imgAlt="image of the glob"
        populationIn2073={regionPopulationIn2073}
      />
      <SearchBar onChangeHandler={filterCountriesOnChangeHandler} />
      {countries.length > 0 && filteredCountries.length === 0 ? (
        <div className="noCountries">Your search doesn&#39;t match any countries</div>
      ) : (
        <CountriesList
          regionId={regionId}
          regionName={regionName}
          countries={filteredCountries}
        />
      )}
    </div>
  );
}

export default ContinentPage;
