import { IMAGES } from "../types";

const loadImages = () => ({
  type: IMAGES.LOAD
});

const setImage = (images: any) => ({
  type: IMAGES.LOAD_SUCCESS,
  images
});

const setError = (error: any) => ({
  type: IMAGES.LOAD_FAIL
});

export { loadImages, setImage, setError };
