const fetch = require('node-fetch');

const getAllCountries = async () => {
  const results = await fetch('https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=', {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });

  const countries = await results.json();

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

    const stats = await results.json();

    return stats;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { getWorldwideStats, getAllCountries };
