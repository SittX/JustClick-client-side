import axios from "axois";
import { actionTypes } from ".";
const fetchMovies = (url) => {
  return async function (dispatch) {
    try {
      dispatch({ type: actionTypes.fetch_request });
      const response = await axios.get(url);
      console.log(response);
      dispatch({ type: actionTypes.fetch_success, payload: response });
    } catch (error) {
      dispatch({ type: actionTypes.fetch_error, payload: error.message });
    }
  };
};
export default fetchMovies;
