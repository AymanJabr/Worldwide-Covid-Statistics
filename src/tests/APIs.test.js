import 'regenerator-runtime/runtime';
import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { getWorldwideStats, getAllCountries } from '../APIs/corona-tracker';

configure({
  adapter: new EnzymeAdapter(),
});

describe('getWorldwideStats()', () => {
  it('Returns the correct object that has totalActiveCases object', () => {
    getWorldwideStats().then((stats) => {
      expect(stats).toHaveProperty('totalActiveCases');
    });
  });

  it('Returns the correct object that has totalDeaths object', () => {
    getWorldwideStats().then((stats) => {
      expect(stats).toHaveProperty('totalDeaths');
    });
  });

  it('Returns the correct object that has totalRecovered object', () => {
    getWorldwideStats().then((stats) => {
      expect(stats).toHaveProperty('totalRecovered');
    });
  });

  it('Returns the correct object that has totalNewCases object', () => {
    getWorldwideStats().then((stats) => {
      expect(stats).toHaveProperty('totalNewCases');
    });
  });

  it('Returns the correct object that has totalNewDeaths object', () => {
    getWorldwideStats().then((stats) => {
      expect(stats).toHaveProperty('totalNewDeaths');
    });
  });

  it('Returns the correct object that has totalCasesPerMillionPop object', () => {
    getWorldwideStats().then((stats) => {
      expect(stats).toHaveProperty('totalCasesPerMillionPop');
    });
  });

  it('Returns the correct object that has created object', () => {
    getWorldwideStats().then((stats) => {
      expect(stats).toHaveProperty('created');
    });
  });

  it('Returns false since object does not contain totallyFalse object', () => {
    getWorldwideStats().then((stats) => {
      expect(stats).not.toHaveProperty('totallyFalse');
    });
  });
});

describe('getAllCountries()', () => {
  it('Returns the correct first country, USA', () => {
    getAllCountries().then((stats) => {
      expect(stats[0]).toHaveProperty('country', 'USA');
    });
  });

  it('Returns the correct first country\' s activeCases', () => {
    getAllCountries().then((stats) => {
      expect(stats[0]).toHaveProperty('activeCases');
    });
  });

  it('Returns the correct first country\' s totalDeaths', () => {
    getAllCountries().then((stats) => {
      expect(stats[0]).toHaveProperty('totalDeaths');
    });
  });

  it('Returns the correct first country\' s totalRecovered', () => {
    getAllCountries().then((stats) => {
      expect(stats[0]).toHaveProperty('totalRecovered');
    });
  });

  it('Returns the correct first country\' s dailyConfirmed', () => {
    getAllCountries().then((stats) => {
      expect(stats[0]).toHaveProperty('dailyConfirmed');
    });
  });

  it('Returns the correct first country\' s dailyDeaths', () => {
    getAllCountries().then((stats) => {
      expect(stats[0]).toHaveProperty('dailyDeaths');
    });
  });

  it('Returns the correct first country\' s lastUpdated', () => {
    getAllCountries().then((stats) => {
      expect(stats[0]).toHaveProperty('lastUpdated');
    });
  });

  it('Returns the correct first country\' s lat', () => {
    getAllCountries().then((stats) => {
      expect(stats[0]).toHaveProperty('lat', 37.09024);
    });
  });

  it('Returns the correct first country\' s lng', () => {
    getAllCountries().then((stats) => {
      expect(stats[0]).toHaveProperty('lng', -95.712891);
    });
  });

  it('Returns false since country does not contain totallyFalse object', () => {
    getAllCountries().then((stats) => {
      expect(stats[0]).not.toHaveProperty('totallyFalse');
    });
  });
});
