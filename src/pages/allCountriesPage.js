import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionUpdateCountries, actionUpdateWorldwide } from '../actions';
import CountryCard from '../components/countryCard';
import WorldwideCard from '../components/worldwideCard';
import { getWorldwideStats, getAllCountries } from '../APIs/corona-tracker';
import SearchBar from '../components/searchBar';
import '../index.css';
import Pagination from '../components/pagination';

const INFECTION_CATEGORIES = ['1,000 <', '1,000 - 10,000', '10,000 - 100,000', '100,000 - 1,000,000', '1,000,000+'];

const AllCountriesPage = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.statisticsReducer.countries);
  const worldwide = useSelector((state) => state.statisticsReducer.worldwide);

  const [countriesStats, setCountriesStats] = useState(countries);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    getWorldwideStats().then((stats) => {
      dispatch(actionUpdateWorldwide(stats));
    }).then(() => {
      getAllCountries().then((stats) => {
        const filteredStats = stats.filter((stat) => stat.activeCases > 0);
        dispatch(actionUpdateCountries(filteredStats));
        const firstPage = filteredStats.slice(0, 50);
        setCountriesStats(firstPage);
      });
    });
  }, [dispatch]);

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
    const newPageNumber = pageNumber + 1;
    const selectedPage = countries.slice(newPageNumber * 50, (newPageNumber + 1) * 50);
    setCountriesStats(selectedPage);
    setPageNumber(newPageNumber);
  };

  const previousPage = () => {
    const newPageNumber = pageNumber - 1;
    const selectedPage = countries.slice(newPageNumber * 50, (newPageNumber + 1) * 50);
    setCountriesStats(selectedPage);
    setPageNumber(newPageNumber);
  };

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

      <Pagination
        totalPages={countries.length / 50}
        pageNumber={pageNumber}
        goToPreviousPage={previousPage}
        goToNextPage={nextPage}
      />

      {countriesStats.length > 0 ? (

        <WorldwideCard
          infected={worldwide.totalActiveCases}
          deceased={worldwide.totalDeaths}
          recovered={worldwide.totalRecovered}
          newCases={worldwide.totalNewCases}
          newDeaths={worldwide.totalNewDeaths}
          casesPerMillion={worldwide.totalCasesPerMillionPop}
          lastUpdated={worldwide.created}
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

export default AllCountriesPage;
