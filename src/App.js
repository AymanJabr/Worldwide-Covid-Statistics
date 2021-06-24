import { Route, Switch } from 'react-router-dom';
import AllCountriesPage from './pages/allCountriesPage';
import SingleCountryPage from './pages/singleCountryPage';

require('dotenv').config();

// https://apify.com/petrpatek/covid-19-aggregator/api

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={AllCountriesPage} exact />
        <Route path="/country/:country" component={SingleCountryPage} exact />
      </Switch>
    </main>
  );
}

export default App;
