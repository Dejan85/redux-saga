import { IMAGES } from "../types";

const imagesReducers = (state: any[] = [], action: any) => {
  if (action.type === IMAGES.LOAD_SUCCESS) {
    return [...state, ...action.images];
  }

  return state;
};

export default imagesReducers;
