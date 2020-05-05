import React from "react";
import logo from "../../assets/logo.png";
import "./logo.style.scss";

function Logo({ logoSize }) {
	console.log(logoSize);
	return (
		<div>
			<img src={logo} alt="logo" className={`logo-${logoSize}`} />
		</div>
	);
}

export default Logo;
