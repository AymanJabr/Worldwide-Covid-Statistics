import { Link } from 'react-router-dom';

const CountryCard = (props) => {

  const {country} = props;

  return(
  <div className="countryCard">
    <img className="countryCardImage" alt="country" />
    <h1 className="countryCardName">{country}</h1>
    <p className="countryCardCasesNumber">N. of Cases</p>
    <Link to="/country">Country of Card</Link>
  </div>
  )
  };

CountryCard.propTypes = {
  country: PropTypes.string.isRequired
};

export default CountryCard;
