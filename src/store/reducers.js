import {
  FETCH_TICKETS,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILE,
  FETCH_TICKETS_LOADING
} from "./types";

const initialState = {
  tickets: {},
  success_message: null,
  fail_message: null,
  loading: false
};

export default function reducers(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_TICKETS:
    case FETCH_TICKETS_SUCCESS:
    case FETCH_TICKETS_FAILE:
    case FETCH_TICKETS_LOADING:
      return { ...state, ...payload };

    default:
      return state;
  }
}
