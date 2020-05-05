import React from "react";
import "./background.style.scss";

function Background({ src, ...otherProps }) {
	return (
		<div className="background-img-container">
			<img src={src} alt="background-img" />
			<React.Fragment>{otherProps.children}</React.Fragment>
		</div>
	);
}

export default Background;
