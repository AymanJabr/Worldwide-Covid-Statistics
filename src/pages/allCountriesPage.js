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
import Pagination from '../components/pagination';

const INFECTION_CATEGORIES = ['1,000 <', '1,000 - 10,000', '10,000 - 100,000', '100,000 - 1,000,000', '1,000,000+'];

const AllCountriesPage = ({ worldwide, countries }) => {
  const [worldwideStats, setWorldwideStats] = useState(worldwide);
  const [countriesStats, setCountriesStats] = useState(countries);
  const [pageNumber, setPageNumber] = useState(0)

  useEffect(() => {
    getWorldwideStats().then((stats) => {
      store.dispatch(actionUpdateWorldwide(stats));
      setWorldwideStats(stats);
    }).then(() => {
      getAllCountries().then((stats) => {
        const filteredStats = stats.filter((stat) => stat.activeCases > 0);
        store.dispatch(actionUpdateCountries(filteredStats));
        let firstPage = filteredStats.slice(0, pageNumber)
        setCountriesStats(firstPage);
      });
    });
  }, []);

  const searchByCountry = (e) => {
    const upperCase = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);

    const newStatistics = countries.filter(

      (stat) => stat.country.search(upperCase) !== -1,
    );
    const filteredStats = newStatistics.filter((stat) => stat.activeCases > 0);
    setCountriesStats(filteredStats);
  };

  const searchByInfectionNumber = (e) => {
    const infectionRange = e.target.value;
    let newStatistics = null;
    switch (infectionRange) {
      case '1,000 <':
        newStatistics = countries.filter((stat) => stat.activeCases < 1000);
        break;

      case '1,000 - 10,000':
        newStatistics = countries.filter((stat) => stat.activeCases <= 10000);
        break;

      case '10,000 - 100,000':
        newStatistics = countries.filter((stat) => stat.activeCases <= 100000);
        break;

      case '100,000 - 1,000,000':
        newStatistics = countries.filter((stat) => stat.activeCases <= 1000000);
        break;

      case '1,000,000+':
        newStatistics = countries.filter((stat) => stat.activeCases > 1000000);
        break;

      default:
        newStatistics = countries;
        break;
    }
    setCountriesStats(newStatistics);
  };

  const nextPage = () => {
    let newPageNumber = pageNumber + 1
    let selectedPage = countries.slice(newPageNumber * 50, (newPageNumber + 1) * 50)
    setCountriesStats(selectedPage)
    setPageNumber(newPageNumber)
  }

  const previousPage = () => {
    let newPageNumber = pageNumber - 1
    let selectedPage = countries.slice(newPageNumber * 50, (newPageNumber + 1) * 50)
    setCountriesStats(selectedPage)
    setPageNumber(newPageNumber)
  }

  return (
    <div className="allCountriesPage">
      <SearchBar searchCountry={searchByCountry} />

      <p className="countryFilterText">Filter countries by number of active cases: </p>

      <select onChange={searchByInfectionNumber} id="filterInfectionNumber">
        <option value="Any">Any</option>
        {
          INFECTION_CATEGORIES.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))
        }
      </select>

        <Pagination pageNumber={pageNumber} goToPreviousPage={previousPage} goToNextPage={nextPage} />

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
