import { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CountryCard from '../components/countryCard';
import Header from '../components/header';

const SingleCountryPage = ({ countries }) => {
  const { country } = useParams();
  const [infected, setInfected] = useState(-1);
  const [deceased, setDeceased] = useState(-1);
  const [recovered, setRecovered] = useState(-1);
  const [lat, setLatitude] = useState(-1);
  const [lng, setLongitude] = useState(-1);
  const [newCases, setNewCases] = useState(-1);
  const [newDeaths, setNewDeaths] = useState(-1);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const myCountry = countries.filter((statistic) => statistic.country === country);
    setInfected(myCountry[0].activeCases);
    setDeceased(myCountry[0].totalDeaths);
    setRecovered(myCountry[0].totalRecovered);
    setLatitude(myCountry[0].lat);
    setLongitude(myCountry[0].lng);
    setNewCases(myCountry[0].dailyConfirmed);
    setNewDeaths(myCountry[0].dailyDeaths);
    setDate(new Date(myCountry[0].lastUpdated));
  }, []);

  return (

    <div className="singleCountryPage">
      {countries.length === 0 ? <Redirect to="/" /> : null}
      <Header />

      <CountryCard
        banner
        country={country}
        infected={infected}
      />

      <div className="countryAllExtraContainer">

        <div className="countryExtraContainer">
          <p className="extraInfoText">Country&apos;s coordinates: </p>
          <span className="extraInfoNumber">
            latitude:
            {' '}
            {lat}
            {' '}
            <br />
            longitude:
            {' '}
            {lng}
          </span>
        </div>

        <div className="countryExtraContainer">
          <p className="extraInfoText">Recovered</p>
          <span className="extraInfoNumber">
            {` ${recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          </span>
        </div>

        <div className="countryExtraContainer">
          <p className="extraInfoText">Deceased</p>
          <span className="extraInfoNumber">
            {` ${deceased.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          </span>
        </div>

        <div className="countryExtraContainer">
          <p className="extraInfoText">Today&apos;s new cases</p>
          <span className="extraInfoNumber">
            {` ${newCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          </span>
        </div>

        <div className="countryExtraContainer">
          <p className="extraInfoText">Today&apos;s new deaths</p>
          <span className="extraInfoNumber">
            {` ${newDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          </span>
        </div>

        <div className="countryExtraContainer">
          <p className="extraInfoText">This information was last updated: </p>
          <span className="extraInfoNumber">

            {`${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()} ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()} UTC`}

          </span>
        </div>

      </div>

    </div>
  );
};

SingleCountryPage.propTypes = {
  countries: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({ countries: state.statisticsReducer.countries });

export default connect(mapStateToProps)(SingleCountryPage);
