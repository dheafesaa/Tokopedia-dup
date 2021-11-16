import { ADD_TO_CART, RESET_CART } from "constants/actions";

const initialState = {
  isLoading: true,
  data: {},
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case RESET_CART:
      return initialState;

    case ADD_TO_CART:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: action.payload,
        },
      };

    default:
      return state;
  }
}
