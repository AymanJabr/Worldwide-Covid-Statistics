import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
  const [lastUpdated, setLastUpdated] = useState(-1);

  useEffect(() => {
    const myCountry = countries.filter((statistic) => statistic.country === country);
    setInfected(myCountry[0].activeCases);
    setDeceased(myCountry[0].totalDeaths);
    setRecovered(myCountry[0].totalRecovered)
    setLatitude(myCountry[0].lat);
    setLongitude(myCountry[0].lng);
    setNewCases(myCountry[0].dailyConfirmed);
    setNewDeaths(myCountry[0].dailyDeaths);
    setLastUpdated(myCountry[0].lastUpdated);
  }, []);

  return (
    <div className="singleCountryPage">
      <Header />

      <CountryCard
        banner
        country={country}
        infected={infected}
      />

      <div className="countryAllExtraContainer">

        <div className="countryExtraContainer">
          <p className="extraInfoText">Country's coordinates: </p>
          <h1 className="extraInfoNumber">
            latitude: {lat} <br/>
            longitude: {lng}
          </h1>
        </div>

        <div className="countryExtraContainer">
          <p className="extraInfoText">recovered</p>
          <h1 className="extraInfoNumber">
            {` ${recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          </h1>
        </div>

        <div className="countryExtraContainer">
          <p className="extraInfoText">deceased</p>
          <h1 className="extraInfoNumber">
            {` ${deceased.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          </h1>
        </div>

        <div className="countryExtraContainer">
          <p className="extraInfoText">Today's new cases</p>
          <h1 className="extraInfoNumber">
            {` ${newCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          </h1>
        </div>

        <div className="countryExtraContainer">
          <p className="extraInfoText">Today's new deaths</p>
          <h1 className="extraInfoNumber">
            {` ${newDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          </h1>
        </div>

        <div className="countryExtraContainer">
          <p className="extraInfoText">This information was last updated: </p>
          <h1 className="extraInfoNumber">
            {lastUpdated}
          </h1>
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
