export const GET_UPDATED_WORLD_STATISTICS = 'GET_UPDATED_WORLD_STATISTICS';
export const GET_UPDATED_COUNTRIES_STATISTICS = 'GET_UPDATED_COUNTRIES_STATISTICS';

export const actionUpdateWorldwide = (worldwide) => ({
  type: GET_UPDATED_WORLD_STATISTICS,
  worldwide,
});

export const actionUpdateCountries = (countries) => ({
  type: GET_UPDATED_COUNTRIES_STATISTICS,
  countries,
});
