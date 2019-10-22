import React from 'react';
import { useDispatch } from "react-redux";

import { CLEAR_MESSAGES } from "../store/types";

import "../assets/scss/notification.scss";

const Notification = ({ message, success }) => {
	const dispatch = useDispatch();
	const clearError = _ => dispatch({ type: CLEAR_MESSAGES });

	return (
		<div
			className={`notification ${success ? 'success' : 'fail'}` }
			onClick={clearError}
		>
			<span>{ message }</span>
		</div>
	);
}

export default Notification;