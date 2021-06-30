import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CountryCard = (props) => {
  const {
    country, infected, banner,
  } = props;

  return (
    <div className="countryCard">
      <Link to={`/country/${country}`}>
        <img
          src={banner ? `../countries_flags/${country}.png` : `./countries_flags/${country}.png`}
          className="countryCardImage"
          alt={`${country}`}
        />
        <h1 className="countryCardName">{country}</h1>
        <p className="countryCardCasesNumber">
          active cases:
          {` ${infected.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
        </p>
        See all country statistics
      </Link>
    </div>
  );
};

CountryCard.propTypes = {
  country: PropTypes.string,
  infected: PropTypes.number,
  banner: PropTypes.bool,
};

CountryCard.defaultProps = {
  country: null,
  infected: null,
  banner: false,
};

export default CountryCard;
