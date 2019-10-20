import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Search from "./Search";

import reducer from "./../store/reducers";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const App = _ => (
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/search/" component={Search} />
    </Router>
  </Provider>
);

export default App;
