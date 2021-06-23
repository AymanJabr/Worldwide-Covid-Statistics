import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../store';
import { actionUpdate } from '../actions';
import CountryCard from '../components/countryCard';
import getItems from '../APIs/apify';
import SearchBar from '../components/searchBar';

const AllCountriesPage = ({ statistics }) => {
  useEffect(() => {
    getItems().then((newStatistics) => {
      store.dispatch(actionUpdate(newStatistics));
    });
  }, []);

  return (
    <div className="allCountriesPage">
      <SearchBar />
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

AllCountriesPage.propTypes = {
  statistics: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({ statistics: state.statisticsReducer.statistics });

export default connect(mapStateToProps)(AllCountriesPage);
