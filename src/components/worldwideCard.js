import PropTypes from 'prop-types';

const WorldwideCard = (props) => {
  const {
    infected, deceased,
    recovered, newCases, newDeaths, casesPerMillion, lastUpdated,
  } = props;

  const myDate = new Date(lastUpdated);

  return (
    <div className="worldwideContainer">
      <img
        className="worldwideImage"
        src="./countries_flags/worldwide.png"
        alt="worldwide"
      />

      <div className="worldwideDataContainer">
        <h1 className="dataTitle">Worldwide Statistics:</h1>
        <p className="worldwideData">
          Current Active cases:
          {' '}
          <span className="worldwideDataNumber">
            {infected === null ? ' 0' : ` ${infected.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          </span>

        </p>

        <p className="worldwideData">
          Worldwide Total Deaths:
          <span className="worldwideDataNumber">
            {deceased.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>

        </p>
        <p className="worldwideData">
          Worldwide Total Recovered:

          <span className="worldwideDataNumber">
            {recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>

        </p>
        <p className="worldwideData">
          New cases today:

          <span className="worldwideDataNumber">
            {newCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>

        </p>
        <p className="worldwideData">
          New deaths today:

          <span className="worldwideDataNumber">
            {newDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>

        </p>
        <p className="worldwideData">
          Number of cases per million people:

          <span className="worldwideDataNumber">
            {casesPerMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>

        </p>
        <p className="worldwideData">
          This data was last updated:

          <span className="worldwideDataNumber">
            {`${myDate.getUTCFullYear()}-${myDate.getUTCMonth() + 1}-${myDate.getUTCDate()} ${myDate.getUTCHours()}:${myDate.getUTCMinutes()}:${myDate.getUTCSeconds()} UTC`}
          </span>

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
