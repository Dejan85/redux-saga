import { IMAGES } from "../types";

const loadingReducers = (state: any = false, action) => {
  switch (action.type) {
    case IMAGES.LOAD: {
      return true;
    }
    case IMAGES.LOAD_SUCCESS: {
      return false;
    }
    case IMAGES.LOAD_FAIL: {
      return false;
    }

    default:
      return state;
  }
};

export default loadingReducers;
