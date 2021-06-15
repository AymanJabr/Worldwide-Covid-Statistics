// https://apify.com/petrpatek/covid-19-aggregator/api

// if the above method does no work
// https://rapidapi.com/collection/coronavirus-covid-19

require('dotenv').config();

function App() {
  return (
    <h1>
      {' '}
      {process.env.REACT_APP_API_TOKEN}
      Meh
    </h1>
  );
}

export default App;
