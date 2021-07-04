const fetch = require('node-fetch');

const getAllCountries = async () => {

  const results = await fetch("http://api.coronatracker.com/v3/stats/worldometer/country?countryCode=")
  const countries = await results.json()

  return countries
};

const getWorldwideStats = async () => {
  const results = await fetch("http://api.coronatracker.com/v3/stats/worldometer/global")
  const stats = await results.json()

  return stats
}

// getAllCountries().then((countries) => console.log(countries))
// getWorldwideStats().then((stats) => console.log(stats))

export { getWorldwideStats, getAllCountries };
