import { IMAGES } from "../types";

const errorReducers = (state: any = null, action: any) => {
  switch (action.type) {
    case IMAGES.LOAD_FAIL:
      return action.error;
    case IMAGES.LOAD:
    case IMAGES.LOAD_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default errorReducers;
