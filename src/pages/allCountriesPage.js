import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../store';
import { actionUpdate } from '../actions';
import CountryCard from '../components/countryCard';
import getItems from '../APIs/apify';
import SearchBar from '../components/searchBar';
import '../index.css';

const AllCountriesPage = ({ statistics }) => {
  const [myStatistics, setMyStatistics] = useState(statistics);

  useEffect(() => {
    getItems().then((newStatistics) => {
      const newSortedStatistics = newStatistics.sort((a, b) => b.infected - a.infected);
      store.dispatch(actionUpdate(newSortedStatistics));
      setMyStatistics(newSortedStatistics);
    });
  }, []);

  const searchByCountry = (e) => {
    const newStatistics = statistics.filter((stat) => stat.country.search(e.target.value) !== -1);
    setMyStatistics(newStatistics);
  };

  return (
    <div className="allCountriesPage">
      <SearchBar searchCountry={searchByCountry} />
      <div className="allCountriesContainer">
        {myStatistics.length > 0 ? myStatistics.map((stat) => (
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

AllCountriesPage.propTypes = {
  statistics: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({ statistics: state.statisticsReducer.statistics });

export default connect(mapStateToProps)(AllCountriesPage);
