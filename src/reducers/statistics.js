import { GET_UPDATED_STATISTICS } from '../actions/index';

const initialState = {
  statistics: [],
};

export default function statisticsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_UPDATED_STATISTICS:

      return {
        statistics:
          action.statistics,

      };

    default:
      return state;
  }
}
