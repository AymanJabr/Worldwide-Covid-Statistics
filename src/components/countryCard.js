import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CountryCard = (props) => {
  const {
    country, deceased, infected, recovered,
  } = props;

  return (
    <div className="countryCard">
      <Link to={`/country/${country}`} deceased={deceased} infected={infected} recovered={recovered}>
        <img
          src={`./countries_flags/${country}.png`}
          className="countryCardImage"
          alt="country"
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
  deceased: PropTypes.number,
  recovered: PropTypes.number,

};

CountryCard.defaultProps = {
  deceased: null,
  recovered: null,
  country: null,
  infected: null,
};

export default CountryCard;
