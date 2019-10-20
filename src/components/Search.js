import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import {
  FETCH_TICKETS,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILE,
  FETCH_TICKETS_LOADING
} from "../store/types";

import "../assets/scss/search.scss";

const base_url = "https://interview.sobus.fr:8080/search";

const Search = _ => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      dispatch({ type: FETCH_TICKETS_LOADING, payload: { loading: true } });
      const { data } = await axios.post(base_url, {
        date,
        departure,
        arrival
      });

      dispatch({
        type: FETCH_TICKETS,
        payload: { tickets: data.ticketsToRetrieve }
      });
      dispatch({
        type: FETCH_TICKETS_SUCCESS,
        payload: { success_message: data.message }
      });
    } catch (err) {
      dispatch({
        type: FETCH_TICKETS_FAILE,
        payload: { fail_message: "Unable to fetch tichets" }
      });
    }
  };

  return (
    <section className="search-container">
      <header className="search-header">
        <h1>Search Bar</h1>
      </header>
      <div className="search-bar">
        <form>
          <input
            type="text"
            placeholder="DEPARTURE"
            value={departure}
            onChange={({ target }) => setDeparture(target.value)}
          />
          <input
            type="text"
            placeholder="ARRIVAL"
            value={arrival}
            onChange={({ target }) => setArrival(target.value)}
          />
          <input
            type="text"
            placeholder="DATE"
            value={date}
            onChange={({ target }) => setDate(target.value)}
          />
          <input type="submit" value="search" onClick={handleSubmit} />
        </form>
      </div>
    </section>
  );
};

export default Search;
