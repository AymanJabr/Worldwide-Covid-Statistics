import PropTypes from 'prop-types';

const WorldwideCard = (props) => {
  const {
    infected, deceased,
    recovered, newCases, newDeaths, casesPerMillion, lastUpdated,
  } = props;

  const myDate = new Date(lastUpdated);

  return (
    <div className="bannerCountry">
      <img
        src="./countries_flags/worldwide.png"
        className="countryCardImage"
        alt="worldwide"
      />
      <h1 className="countryCardName">Worldwide</h1>
      <p className="countryCardCasesNumber">
        active cases:
        {infected === null ? ' 0' : ` ${infected.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
      </p>

      <div>
        <p>
          Worldwide Total Deaths:
          {deceased.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
        <p>
          Worldwide Total Recovered:
          {recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
        <p>
          New cases today:
          {newCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
        <p>
          New deaths today:
          {newDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
        <p>
          Number of cases per million people:
          {casesPerMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
        <p>
          This data was last updated:
          {`${myDate.getUTCFullYear()}-${myDate.getUTCMonth() + 1}-${myDate.getUTCDate()} ${myDate.getUTCHours()}:${myDate.getUTCMinutes()}:${myDate.getUTCSeconds()} UTC`}
        </p>

      </div>

    </div>
  );
};

WorldwideCard.propTypes = {
  infected: PropTypes.number,
  deceased: PropTypes.number,
  recovered: PropTypes.number,
  newCases: PropTypes.number,
  newDeaths: PropTypes.number,
  casesPerMillion: PropTypes.number,
  lastUpdated: PropTypes.string,
};

WorldwideCard.defaultProps = {
  infected: 0,
  deceased: 0,
  recovered: 0,
  newCases: 0,
  newDeaths: 0,
  casesPerMillion: 0,
  lastUpdated: '',
};

export default WorldwideCard;
