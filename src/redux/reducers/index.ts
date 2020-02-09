import { combineReducers } from "redux";

import loadingReducer from "./loadingReducers";
import imagesReducers from "./imagesReducers";
import errorReducer from "./errorReducers";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  images: imagesReducers,
  error: errorReducer
});

export default rootReducer;
