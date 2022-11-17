import { IMAGE_FORMAT, SWAPI_PARAM_PAGE, URL_IMG_PERSON } from "constants/api";

const getId = (url) => {
  return url
    .split("/")
    .filter((item) => item)
    .at(-1);
};

export const getPeoplePageId = (url) => {
  if (url) {
    const idx = url.lastIndexOf(SWAPI_PARAM_PAGE);
    const id = url.slice(idx + SWAPI_PARAM_PAGE.length);
    return +id;
  } else return null;
};

export const getPeopleId = (url) => getId(url);

export const getPeopleImage = (id) => `${URL_IMG_PERSON}${id}${IMAGE_FORMAT}`;
