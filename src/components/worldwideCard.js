import PropTypes from 'prop-types';

const WorldwideCard = (props) => {
    const {
        country, infected, banner, worldwide, deceased,
        recovered, newCases, newDeaths, casesPerMillion, lastUpdate,
    } = props;

    return (
        <div className={`countryCard ${banner ? 'bannerCountry' : ''}`}>
                <img
                    src={banner ? `../countries_flags/${country}.png` : `./countries_flags/${country}.png`}
                    className="countryCardImage"
                    alt={`${country}`}
                />
                <h1 className="countryCardName">{country}</h1>
                <p className="countryCardCasesNumber">
                    active cases:
                    {infected === null ? ' 0' : ` ${infected.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                </p>
                {banner ? '' : 'See all country statistics'}

                {worldwide ? (
                    <div>
                        <p>
                            Worldwide Total Deaths:
                            {deceased}
                        </p>
                        <p>
                            Worldwide Total Recovered:
                            {recovered}
                        </p>
                        <p>
                            New cases today:
                            {newCases}
                        </p>
                        <p>
                            New deaths today:
                            {newDeaths}
                        </p>
                        <p>
                            Number of cases per million people:
                            {casesPerMillion}
                        </p>
                        <p>
                            This data was last updated:
                            {lastUpdate}
                        </p>

                    </div>
                ) : ''}
        </div>
    );
};

WorldwideCard.propTypes = {
    country: PropTypes.string,
    infected: PropTypes.number,
    banner: PropTypes.bool,
    worldwide: PropTypes.bool,
    deceased: PropTypes.number,
    recovered: PropTypes.number,
    newCases: PropTypes.number,
    newDeaths: PropTypes.number,
    casesPerMillion: PropTypes.number,
    lastUpdate: PropTypes.string,
};

WorldwideCard.defaultProps = {
    country: null,
    infected: 0,
    banner: false,
    worldwide: false,
    deceased: 0,
    recovered: 0,
    newCases: 0,
    newDeaths: 0,
    casesPerMillion: 0,
    lastUpdate: '',
};

export default WorldwideCard;
