import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CountryCard from '../components/countryCard';
import StatisticsGraph from '../components/statisticsGraph';
import Header from '../components/header';

const SingleCountryPage = ({ statistics }) => {
  const { country } = useParams();
  const [infected, setInfected] = useState(-1);
  const [deceased, setDeceased] = useState(-1);
  const [recovered, setRecovered] = useState(-1);

  useEffect(() => {
    console.log(statistics);
    const myCountry = statistics.filter((statistic) => statistic.country === country);
    console.log(myCountry);
    setInfected(myCountry[0].infected);
    setDeceased(myCountry[0].deceased);
    setRecovered(myCountry[0].recovered);
    console.log(myCountry[0].infected);
    console.log(infected);
  }, []);

  return (
    <div className="singleCountryPage">
      <Header />

      {console.log(country)}
      {console.log(infected)}

      <CountryCard className="bannerCountry" country={country} deceased={deceased} infected={infected} recovered={recovered} />
      <StatisticsGraph />
      <div className="countryAllExtraContainer">

        <div className="countryExtraContainer">
          <h1 className="extraInfoNumber">{recovered}</h1>
          <p className="extraInfoText">recovered</p>
        </div>

        <div className="countryExtraContainer">
          <h1 className="extraInfoNumber">{deceased}</h1>
          <p className="extraInfoText">deceased</p>
        </div>

      </div>

    </div>
  );
};

SingleCountryPage.propTypes = {
  statistics: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({ statistics: state.statisticsReducer.statistics });

export default connect(mapStateToProps)(SingleCountryPage);
