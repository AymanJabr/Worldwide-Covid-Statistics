import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CountryCard = (props) => {
  const {
    country, deceased, infected, recovered,
  } = props;

  return (
    <div className="countryCard">
      <img
        src={`./countries_flags/${country}.png`}
        className="countryCardImage"
        alt="country"
      />
      <h1 className="countryCardName">{country}</h1>
      <p className="countryCardCasesNumber">{infected}</p>
      <Link to="/country" deceased={deceased} infected={infected} recovered={recovered}>Country of Card</Link>
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
