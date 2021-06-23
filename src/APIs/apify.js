const ApifyClient = require('apify-client');
require('dotenv').config({ path: `${__dirname}/../../.env` });

const client = new ApifyClient({
  token: process.env.REACT_APP_API_TOKEN,
});

const input = {};

const getItems = async () => {
  const run = await client.actor('petrpatek/covid-19-aggregator').call(input);

  const { items } = await client.dataset(run.defaultDatasetId).listItems();

  return items;
};

export default getItems;
