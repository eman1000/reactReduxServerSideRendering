import React from 'react';
import '../styles/core.scss';
import * as css from './CoreLayout.scss';
export const CoreLayout = ({ children }) => {
	return (
		<div className="container-fluid">
			{ children }
		</div>
	);
};
export default CoreLayout;
