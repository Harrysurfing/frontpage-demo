import React from "react";
import "./sidebar.style.scss";
import Logo from "../logo/logo.component";
import Header from "../header/header.component";

function Sidebar({ logoSize, headerText, style, ...otherProps }) {
	return (
		<div className="sidebar-container" style={{ ...style }}>
			{otherProps.noLogo ? null : (
				<div className="logo-wrapper">
					<Logo logoSize={logoSize} />
				</div>
			)}
			<div className="header-wrapper">
				<Header text={headerText} />
			</div>
			<React.Fragment>{otherProps.children}</React.Fragment>
		</div>
	);
}

export default Sidebar;
