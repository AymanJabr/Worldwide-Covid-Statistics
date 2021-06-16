import { useEffect } from 'react';
import CountryCard from '../components/countryCard';
import Header from '../components/header';
import getItems from '../APIs/apify';

const AllCountriesPage = () => {
  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="allCountriesPage">
      <Header />
      <CountryCard className="bannerCountry" />
      <p className="allCountriesText">All countries</p>
      <div className="allCountriesContainer">
        {/* Some kind of for loop */}
        <CountryCard />
      </div>
    </div>
  );
};

export default AllCountriesPage;
