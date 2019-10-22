import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchTickets } from '../store/actions';

import Notification from './Notification';
import Loader from './Loader';

import "../assets/scss/search.scss";

const Search = _ => {
  const [departure, setDeparture] = useState('Marseille');
  const [arrival, setArrival] = useState('Lyon');
  const [date, setDate] = useState('14-05-19');

  const success_message = useSelector(state => state.success_message);
  const fail_message = useSelector(state => state.fail_message);
  const loading = useSelector(state => state.loading);
  
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(fetchTickets(date, departure, arrival, _ => history.push("/result")));
  };

  return (
    <section className="search-container flex-col-center">
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
      { success_message && <Notification message={success_message} success={true} /> }
      { fail_message && <Notification message={fail_message} success={false} /> }
      { loading && <Loader /> }
    </section>
  );
};

export default Search;
