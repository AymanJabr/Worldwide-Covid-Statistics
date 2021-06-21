import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CountryCard = (props) => {
  const {
    country, deceased, infected, recovered,
  } = props;

  return (
    <div className="countryCard">
      <img className="countryCardImage" alt="country" />
      <h1 className="countryCardName">{country}</h1>
      <p className="countryCardCasesNumber">{infected}</p>
      <Link to="/country" deceased={deceased} infected={infected} recovered={recovered}>Country of Card</Link>
    </div>
  );
};

CountryCard.propTypes = {
  country: PropTypes.string.isRequired,
  infected: PropTypes.number.isRequired,
  deceased: PropTypes.number,
  recovered: PropTypes.number,

};

CountryCard.defaultProps = {
  deceased: null,
  recovered: null,
};

export default CountryCard;

// country: "Azerbaijan"
// deceased: 4962
// historyData: "https://api.apify.com/v2/datasets/JtJHjnBtnIeKYpFi0/items?format=json&clean=1"
// infected: 335493
// lastUpdatedApify: "2021-06-21T03:00:21.000Z"
// lastUpdatedSource: "N/A"
// moreData: "https://api.apify.com/v2/key-value-stores/ThmCW2NVnrLa0tVp5/records/LATEST?disableRedirect=true"
// recovered: 329550
// sourceUrl: "https://koronavirusinfo.az/az/page/statistika/azerbaycanda-cari-veziyyet"
// tested: 3675862
