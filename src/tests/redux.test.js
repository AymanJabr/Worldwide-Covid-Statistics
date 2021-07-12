import { actionUpdateWorldwide, actionUpdateCountries } from '../actions/index';

import statisticsReducer from '../reducers/statistics';

// redux actions
describe('Tests Actions', () => {
  it('Returns correct type, GET_UPDATED_WORLD_STATISTICS', () => {
    expect(actionUpdateWorldwide({})).toHaveProperty('type', 'GET_UPDATED_WORLD_STATISTICS');
  });

  it('Returns correct type, GET_UPDATED_COUNTRIES_STATISTICS', () => {
    expect(actionUpdateCountries({})).toHaveProperty('type', 'GET_UPDATED_COUNTRIES_STATISTICS');
  });
});

const initialState = {
  worldwide: {},
  countries: ['germany', 'italy', 'brazil'],
};

// redux reducers
describe('Tests Statistics Reducer functionality', () => {
  it('returns expected state with changed worldwide statistics', () => {
    expect(statisticsReducer(initialState, actionUpdateWorldwide({ totalActiveCases: 2 }))).toHaveProperty('countries', ['germany', 'italy', 'brazil']);

    expect(statisticsReducer(initialState, actionUpdateWorldwide({ totalActiveCases: 2 }))).toHaveProperty('worldwide', { totalActiveCases: 2 });
  });

  it('returns expected state with changed countries statistics', () => {
    expect(statisticsReducer(initialState, actionUpdateCountries(['italy', 'brazil']))).toHaveProperty('countries', ['italy', 'brazil']);
  });
});
