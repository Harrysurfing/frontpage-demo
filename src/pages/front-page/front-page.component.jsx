import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../../component/header/header.component";
import Logo from "../../component/logo/logo.component";
import "./front-page.style.scss";
import Globe from "../../assets/globe.png";
import { ReactComponent as FingerIcon } from "../../assets/icon-prompt.svg";

const FrontPage = ({ history }) => {
	return (
		<div className="front-page-container">
			<div className="header-container">
				<Header text="LOREM IPSUM" />
			</div>
			<div className="logo-container">
				<Logo logoSize="large" />
			</div>
			<div className="globe">
				<img src={Globe} alt="globe" />
			</div>
			<div className="start-prompt" onClick={() => history.push("/home")}>
				<FingerIcon />
				<span className="start-line">Click begin to get started.</span>
			</div>
		</div>
	);
};

export default withRouter(FrontPage);
