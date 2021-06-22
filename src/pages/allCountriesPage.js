import { useEffect, useState } from 'react';
import CountryCard from '../components/countryCard';
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
      <CountryCard className="bannerCountry" />
      <p className="allCountriesText">All countries</p>
      <div className="allCountriesContainer">
        {console.log(statistics)}
        {statistics.length > 0 ? statistics.map((stat) => (
          <CountryCard
            key={stat.country}
            country={stat.country}
            infected={stat.infected}
            deceased={stat.deceased}
            recovered={stat.recovered}
          />
        )) : <h1>Loading most recent data....</h1> }
      </div>
    </div>
  );
};

export default AllCountriesPage;
