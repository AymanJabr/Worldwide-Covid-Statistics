const ApifyClient = require('apify-client');
require('dotenv').config({ path: `${__dirname}/../../.env` });

const client = new ApifyClient({
  token: process.env.REACT_APP_API_TOKEN,
});

const input = {};

const getItems = async () => {
  // Run the actor and wait for it to finish
  const run = await client.actor('petrpatek/covid-19-aggregator').call(input);

  // Fetch and print actor results from the run's dataset (if any)
  console.log('Results from dataset');
  const { items } = await client.dataset(run.defaultDatasetId).listItems();
  //   console.log(items);
  items.forEach((item) => {
    console.dir(item);
  });

  return items;
};

// getItems()

export default getItems;
