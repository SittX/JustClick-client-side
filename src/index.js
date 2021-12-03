import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { moviesReducer } from "./redux/reducers/moviesReducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
const initalState = {
  movies: "",
  trendingPosts: "",
  loading: false,
  error: null,
};
const store = createStore(moviesReducer, initalState, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
