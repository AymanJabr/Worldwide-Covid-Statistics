const fetch = require('node-fetch');

const getAllCountries = async () => {
  const results = await fetch('https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=', {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });

  // console.log(results);

  const countries = await results.json();

  // console.log(countries);

  return countries;
};

const getWorldwideStats = async () => {
  try {
    const results = await fetch('https://api.coronatracker.com/v3/stats/worldometer/global', {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

    // console.log(results);

    const stats = await results.json();

    // console.log(stats);

    return stats;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// getAllCountries().then((countries) => console.log(countries))
// getWorldwideStats().then((stats) => console.log(stats))

export { getWorldwideStats, getAllCountries };
