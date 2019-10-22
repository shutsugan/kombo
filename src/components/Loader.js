import React from 'react';

import '../assets/scss/loader.scss';

const Loader = _ => (
	<div className="lds-ring">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
);

export default Loader;