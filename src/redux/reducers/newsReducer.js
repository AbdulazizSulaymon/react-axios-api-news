import { SET_CATEGORY, SET_ERROR, SET_LOADING, SET_NEWS } from "../types";

const initialState = {
  news: [],
  category: "all",
  loading: false,
  error: false,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_NEWS:
      return { ...state, news: action.payload };
    case SET_CATEGORY:
      return { ...state, category: action.payload };

    default:
      return state;
  }
};

export default newsReducer;
