import axios from "axios";
import {
  LOADING,
  GIFs_LOADED,
  GIFs_LOADING_FAILED,
  RESET_AUTO_FETCH,
  SEARCH_GIFs_LOADED,
} from "./types";

export const loadGifs = (data) => {
  return (dispatch, getState) => {
    //dispatch loading action
    dispatch({
      type: LOADING,
    });

    axios({
      method: "get",
      url: `http://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}`,
    })
      .then((response) => {
        dispatch({
          type: GIFs_LOADED,
          payload: response.data.data,
        });
      })
      .catch((error) => {
        console.error(error.response.data);
        dispatch({
          type: GIFs_LOADING_FAILED,
        });
      });
  };
};

export const searchGifs = (query) => {
  return (dispatch, getState) => {
    dispatch({
      type: LOADING,
    });

    axios({
      method: "get",
      url: `http://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${query}`,
    })
      .then((response) => {
        dispatch({
          type: SEARCH_GIFs_LOADED,
          payload: response.data.data,
        });
      })
      .catch((error) => {
        console.error(error.response.data);
        dispatch({
          type: GIFs_LOADING_FAILED,
        });
      });
  };
};

export const resetAutofetch = () => {
  return (dispatch, getState) => {
    dispatch({
      type: RESET_AUTO_FETCH,
    });
  };
};
