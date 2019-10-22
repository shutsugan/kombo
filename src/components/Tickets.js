import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import Ticket from './Ticket';

import "../assets/scss/tickets.scss";

const Tickets = _ => {
	const tickets = useSelector(state => state.tickets);
	const history = useHistory();

	const backToSearch = _ => history.push('/search');
	const renderTickets = ticket => (<Ticket key={ticket.id} ticket={ticket} />);

	const showNoResultMessage = _ => (
		<span className="no-result">
			No result found
			<span className="link" onClick={backToSearch}> Back home</span>
		</span>
	);

	return (
		<div className="tickets flex-col">
			{
				tickets.length
					? tickets.map(renderTickets)
					: showNoResultMessage()
			}
		</div>
	);
};

export default Tickets;