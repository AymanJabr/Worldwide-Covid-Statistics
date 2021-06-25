import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CountryCard = (props) => {
  const {
    country, infected,
  } = props;

  return (
    <div className="countryCard">
      <Link to={`/country/${country}`}>
        <img
          src={`./countries_flags/${country}.png`}
          className="countryCardImage"
          alt={`${country}`}
        />
        <h1 className="countryCardName">{country}</h1>
        <p className="countryCardCasesNumber">
          active cases:
          {infected}
          {/* {` ${infected.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`} */}
        </p>
        See all country statistics
      </Link>
    </div>
  );
};

CountryCard.propTypes = {
  country: PropTypes.string,
  infected: PropTypes.number,
  // deceased: PropTypes.number,
  // recovered: PropTypes.number,

};

CountryCard.defaultProps = {
  country: null,
  infected: null,
  // deceased: null,
  // recovered: null,
};

export default CountryCard;
