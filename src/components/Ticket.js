import React from 'react';

import Wifi from '../assets/icons/Wifi';
import Toilet from '../assets/icons/Toilet';

const Ticket = ({ ticket }) => (
	<div className="ticket__wrapper  mb-1">
		<div className="ticket__head flex">
			<div>
				<strong>{ ticket.mode }</strong> | <span>{ ticket.company }</span>
			</div>
			<div>
			{ ticket.comfort.wifi && <Wifi /> }
			{ ticket.comfort.toilets &&	<Toilet /> }
			</div>
		</div>
		<div className="ticket flex">
			<div className="ticket__col fx-1">
				<div className="ticket__row flex fx-1 ticket--stretch">
					<div className="ticket__title mb-1">
						<h2>{ ticket.departure }</h2>
						<span>{ ticket.departure_station }</span>
					</div>
					<div className="ticket__time">
						<h2>{ ticket.departure_time }</h2>
						<span>Departure</span>
					</div>
				</div>
				<div className="ticket__row flex ticket--stretch">
				<div className="ticket__name mb-1">
					<h2>{ ticket.arrival }</h2>
					<span>{ ticket.arrival_station }</span>
				</div>
				<div className="ticket__time">
					<h2>{ ticket.arrival_time }</h2>
					<span>Arrival</span>
				</div>
			</div>
			</div>
			<div className="ticket__price flex-center">
				<h3>{ ticket.price } &euro;</h3>
			</div>
		</div>
	</div>
);

export default Ticket;