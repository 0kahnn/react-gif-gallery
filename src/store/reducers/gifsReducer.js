import {
  LOADING,
  GIFs_LOADED,
  GIFs_LOADING_FAILED,
  RESET_AUTO_FETCH,
  SEARCH_GIFs_LOADED,
} from "../actions/types";

const initState = {
  isLoading: false,
  gifsData: [],
  autoFetch: true,
};
const gifsReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case GIFs_LOADED:
      return {
        ...state,
        gifsData: action.payload,
        isLoading: false,
      };
    case SEARCH_GIFs_LOADED:
      return {
        ...state,
        gifsData: action.payload,
        isLoading: false,
        autoFetch: false,
      };

    case GIFs_LOADING_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    case RESET_AUTO_FETCH:
      return {
        ...state,
        isLoading: false,
        autoFetch: false,
      };

    default:
      return state;
  }
};
export default gifsReducer;
