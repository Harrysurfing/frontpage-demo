import React from "react";
import "./nav-button.style.scss";

function NavButton({ isActive, ...otherProps }) {
	return (
		<div className={`nav-button ${isActive ? "active" : "inactive"}`}>
			{otherProps.children}
		</div>
	);
}

export default NavButton;
