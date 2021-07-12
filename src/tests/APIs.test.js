import 'regenerator-runtime/runtime';
import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { getWorldwideStats, getAllCountries } from '../APIs/corona-tracker';

configure({
  adapter: new EnzymeAdapter(),
});

describe('getWorldwideStats()', () => {
  it('Returns the correct object that has totalActiveCAses object', () => {
    getWorldwideStats().then((stats) => {
      expect(stats).toHaveProperty('totalActiveCases');
    });
  });
});

describe('getAllCountries()', () => {
  it('Returns the correct first country, USA', () => {
    getAllCountries().then((stats) => {
      expect(stats[0]).toHaveProperty('country', 'USA');
    });
  });
});
