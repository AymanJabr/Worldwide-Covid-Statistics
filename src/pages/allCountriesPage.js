import CountryCard from "../components/countryCard"



const AllCountriesPage = () => {


    return (
        <div className="allCountriesPage">
            <CountryCard className="bannerCountry" />
            <p className="allCountriesText">All countries</p>
            <div className="allCountriesContainer">
                {/* Some kind of for loop */}
                <CountryCard />
            </div>
        </div>
    )
}

export default AllCountriesPage