import CountryCard from "../components/countryCard"
import StatisticsGraph from "../components/statisticsGraph"


const SingleCountryPage = () => {


    return (
        <div className="singleCountryPage">
            <CountryCard className="bannerCountry" />
            <StatisticsGraph />
            <div className="countryExtraContainer">

            </div>

        </div>
    )
}

export default SingleCountryPage