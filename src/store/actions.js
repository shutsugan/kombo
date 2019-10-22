import axios from "axios";

import {
  FETCH_TICKETS,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILE,
  FETCH_TICKETS_LOADING
} from "./types";

const base_url = "https://interview.sobus.fr:8080/search";

export const fetchTickets = (date, departure, arrival, callback) => async dispatch => {
	try {
		dispatch({ type: FETCH_TICKETS_LOADING, payload: { loading: true } });
		
		const { data: { ticketsToRetrieve, message } } = await axios.post(base_url, {
			date,
			departure,
			arrival
		});

		dispatch({
			type: FETCH_TICKETS,
			payload: { tickets: ticketsToRetrieve }
		});

		dispatch({
			type: FETCH_TICKETS_SUCCESS,
			payload: { success_message: message }
		});

		callback();
	} catch (err) {
		dispatch({
			type: FETCH_TICKETS_FAILE,
			payload: { fail_message: "Unable to fetch tichets" }
		});
	}

	dispatch({ type: FETCH_TICKETS_LOADING, payload: { loading: false } });
};