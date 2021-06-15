import { Link } from 'react-router-dom';

const CountryCard = () => (
  <div className="countryCard">
    <img className="countryCardImage" alt="country" />
    <h1 className="countryCardName">Name of Country</h1>
    <p className="countryCardCasesNumber">N. of Cases</p>
    <Link to="/country">Country of Card</Link>
  </div>
);

export default CountryCard;
