import { useEffect, useState } from 'react';
import CountryCard from '../components/countryCard';
import Header from '../components/header';
import getItems from '../APIs/apify';

const AllCountriesPage = () => {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    getItems().then((newStatistics) => {
      setStatistics(newStatistics);
    });
  }, []);

  return (
    <div className="allCountriesPage">
      <Header />
      <CountryCard className="bannerCountry" />
      <p className="allCountriesText">All countries</p>
      <div className="allCountriesContainer">
        {console.log(statistics)}
        {statistics.length > 0 ? statistics.map((stat) => (
          <h1
            key={stat.country}
          >
            {stat.country}
          </h1>
        )) : <h1>Loading data....</h1> }
        {/* <CountryCard /> */}
      </div>
    </div>
  );
};

export default AllCountriesPage;
