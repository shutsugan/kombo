import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import Search from "./Search";
import Tickets from "./Tickets";

import reducer from "./../store/reducers";

import "../assets/scss/index.scss";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const App = _ => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/search/" component={Search} />
      <Route path="/result" component={Tickets} />
    </BrowserRouter>
  </Provider>
);

export default App;
