import { getNewsByCategory } from "../../api";
import { dispatch } from "../store";
import { SET_CATEGORY, SET_ERROR, SET_LOADING, SET_NEWS } from "../types";

export const setLoading = (state) => {
  dispatch({ type: SET_LOADING, payload: state });
};

export const setError = (state) => {
  dispatch({ type: SET_ERROR, payload: state });
};

export const setNewsByCategory = async (category) => {
  setLoading(true);
  setError(false);

  const obj = await getNewsByCategory(category);
  if (obj.success) dispatch({ type: SET_NEWS, payload: obj.data.data });
  else setError(true);

  setLoading(false);
};

export const setCategory = (category) => {
  dispatch({ type: SET_CATEGORY, payload: category });
};
