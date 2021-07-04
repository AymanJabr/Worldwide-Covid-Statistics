import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../store';
import { actionUpdateCountries, actionUpdateWorldwide } from '../actions';
import CountryCard from '../components/countryCard';
import { getWorldwideStats, getAllCountries } from '../APIs/corona-tracker';
import SearchBar from '../components/searchBar';
import '../index.css';

const AllCountriesPage = ({ worldwide, countries }) => {
  const [worldwideStats, setWorldwideStats] = useState(worldwide);
  const [countriesStats, setCountriesStats] = useState(countries);

  useEffect(() => {

    getWorldwideStats().then((stats) => {
      store.dispatch(actionUpdateWorldwide(stats))
      setWorldwideStats(stats)
    }).then(() => {
      getAllCountries((stats) => {
        store.dispatch(actionUpdateCountries(stats))
        setCountriesStats(stats)
      })
    })

    // getItems().then((newStatistics) => {
    //   const newSortedStatistics = newStatistics.sort((a, b) => b.infected - a.infected);
    //   store.dispatch(actionUpdate(newSortedStatistics));
    //   setMyStatistics(newSortedStatistics);
    // });
  }, []);

  const searchByCountry = (e) => {
    const newStatistics = statistics.filter((stat) => stat.country.search(e.target.value) !== -1);
    setMyStatistics(newStatistics);
  };

  return (
    <div className="allCountriesPage">
      <SearchBar searchCountry={searchByCountry} />

      {countriesStats.length > 0 ?<CountryCard
        banner
        worldwide
        country="worldwide"
        infected={worldwideStats.totalActiveCases}
        deceased={worldwideStats.totalDeaths}
        recovered={worldwideStats.totalRecovered}
        newCases={worldwideStats.totalNewCases}
        newDeaths={worldwideStats.totalNewDeaths}
        casesPerMillion={worldwideStats.totalCasesPerMillion}
        lastUpdated={worldwideStats.lastUpdated}
      /> : ''}

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
  worldwide: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  worldwide: state.statisticsReducer.worldwide,
  countries: state.statisticsReducer.countries
});

export default connect(mapStateToProps)(AllCountriesPage);
