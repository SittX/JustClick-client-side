import { useSelector } from "react-redux";
const initalState = useSelector();
const moviesReducer = (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default moviesReducer;
