import * as React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { composeWithDevTools } from "@redux-devtools/extension";

import rootReducer from "./reducers";

import AppContainer from "./components/AppContainer";

const store = createStore(rootReducer, composeWithDevTools());

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppContainer />
      </Router>
    </Provider>
  );
};

export default App;
