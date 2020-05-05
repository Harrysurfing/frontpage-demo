import React from "react";
import "./header.style.scss";

function Header({ text }) {
	return <strong className="header-text">{text}</strong>;
}

export default Header;
