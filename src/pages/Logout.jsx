import React from "react";
import './Logout.css';

const handleClick = () => {
	return (alert("Logged Out"));
}

const Logout = () => {
return (
	<div className="support">
		<button className="btn-align" onClick={handleClick}>Logout</button>
	</div>
);
};

export default Logout;
