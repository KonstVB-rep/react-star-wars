import {
  ADD_PERSON_TO_FAVORITE,
  REMOVE_PERSON_FROM_FAVORITE,
} from "../constants/action_types";

const initialState = {};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON_TO_FAVORITE:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_PERSON_FROM_FAVORITE:
      const newState = structuredClone(state);
      delete newState[action.payload];
      return {
        ...newState,
      };
    default:
      return state;
  }
};

export default favoriteReducer;
