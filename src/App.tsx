import * as React from "react";
import { Provider } from "react-redux";

// components
import Header from "./Header";
import ImageGrid from "./ImageGrid";

import configureStore from "./redux/store";
const store = configureStore();

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <ImageGrid />
        This is app component
      </div>
    </Provider>
  );
};

export default App;
