import {
  FETCH_TICKETS,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILE,
  FETCH_TICKETS_LOADING,
  CLEAR_MESSAGES
} from "./types";

const initialState = {
  tickets: [],
  success_message: null,
  fail_message: null,
  loading: false
};

export default function reducers(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_TICKETS:
    case FETCH_TICKETS_LOADING:
      return { ...state, ...payload };
    
    case FETCH_TICKETS_SUCCESS:
      return { ...state, success_message: payload.success_message};
    case FETCH_TICKETS_FAILE:
      return { ...state, fail_message: payload.fail_message};
    case CLEAR_MESSAGES:
      return { ...state, fail_message: null, success_message: null };

    default:
      return state;
  }
}
