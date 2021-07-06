import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../store';
import { actionUpdateCountries, actionUpdateWorldwide } from '../actions';
import CountryCard from '../components/countryCard';
import WorldwideCard from '../components/worldwideCard';
import { getWorldwideStats, getAllCountries } from '../APIs/corona-tracker';
import SearchBar from '../components/searchBar';
import '../index.css';

const AllCountriesPage = ({ worldwide, countries }) => {
  const [worldwideStats, setWorldwideStats] = useState(worldwide);
  const [countriesStats, setCountriesStats] = useState(countries);

  useEffect(() => {
    getWorldwideStats().then((stats) => {
      store.dispatch(actionUpdateWorldwide(stats));
      setWorldwideStats(stats);
    }).then(() => {
      getAllCountries().then((stats) => {
        const filteredStats = stats.filter((stat) => stat.activeCases > 0);
        store.dispatch(actionUpdateCountries(filteredStats));
        setCountriesStats(filteredStats);
      });
    });
  }, []);

  const searchByCountry = (e) => {
    const newStatistics = countries.filter(
      (stat) => stat.country.search(e.target.value) !== -1,
    );
    const filteredStats = newStatistics.filter((stat) => stat.activeCases > 0);
    setCountriesStats(filteredStats);
  };

  return (
    <div className="allCountriesPage">
      <SearchBar searchCountry={searchByCountry} />

      {countriesStats.length > 0 ? (

        <WorldwideCard
          infected={worldwideStats.totalActiveCases}
          deceased={worldwideStats.totalDeaths}
          recovered={worldwideStats.totalRecovered}
          newCases={worldwideStats.totalNewCases}
          newDeaths={worldwideStats.totalNewDeaths}
          casesPerMillion={worldwideStats.totalCasesPerMillionPop}
          lastUpdated={worldwideStats.created}
        />
      ) : ''}

      <div className="allCountriesContainer">
        {countriesStats.length > 0 ? countriesStats.map((stat) => (
          <CountryCard
            key={stat.country}
            country={stat.country}
            infected={stat.activeCases}
          />
        )) : <h1>Loading most recent data....</h1>}
      </div>
    </div>
  );
};

AllCountriesPage.propTypes = {
  countries: PropTypes.instanceOf(Array).isRequired,
  worldwide: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  worldwide: state.statisticsReducer.worldwide,
  countries: state.statisticsReducer.countries,
});

export default connect(mapStateToProps)(AllCountriesPage);
