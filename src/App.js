import { Route, Switch } from 'react-router-dom';
import AllCountriesPage from './pages/allCountriesPage';
import SingleCountryPage from './pages/singleCountryPage';

require('dotenv').config();

// https://apify.com/petrpatek/covid-19-aggregator/api

// if the above method does no work
// https://rapidapi.com/collection/coronavirus-covid-19

// { process.env.REACT_APP_API_TOKEN }

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={AllCountriesPage} exact />
        <Route path="/country" component={SingleCountryPage} exact />
      </Switch>
    </main>
  );
}

export default App;
