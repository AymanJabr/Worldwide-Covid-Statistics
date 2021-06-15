import CountryCard from '../components/countryCard';
import StatisticsGraph from '../components/statisticsGraph';

const SingleCountryPage = () => (
  <div className="singleCountryPage">
    <CountryCard className="bannerCountry" />
    <StatisticsGraph />
    <div className="countryAllExtraContainer">

      <div className="countryExtraContainer">
        <h1 className="extraInfoNumber">9999</h1>
        <p className="extraInfoText">some information</p>
      </div>

    </div>

  </div>
);

export default SingleCountryPage;
