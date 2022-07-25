import {
  FETCH_FLIGHTS_START,
  FETCH_FLIGHTS_COMPLETE,
  FETCH_FLIGHTS_ERROR,
  ADD_SEARCH_ITEM,
} from "../actions/results";

const initialState = {
  isLoading: false,
  data: [],
  error: {},
  searchItems: [],
};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLIGHTS_START:
      return {
        ...state,
        isLoading: true,
        data: [],
      };
    case FETCH_FLIGHTS_COMPLETE:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case FETCH_FLIGHTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case ADD_SEARCH_ITEM:
      return {
        ...state,
        searchItems: [...state.searchItems, action.payload],
      };
    default:
      return state;
  }
};

export default resultsReducer;
