import React, { useState, useEffect } from "react";

import "./bottom-navbar.style.scss";
import NavButton from "../nav-button/nav-button.component";
import { ReactComponent as HomeIcon } from "../../assets/home-icon.svg";
import { withRouter } from "react-router-dom";

const InitialState = [
	{
		icon: true,
		path: "home",
		text: "Home",
		active: true,
	},
	{
		icon: false,
		path: "topic1",
		text: "TOPIC 1",
		active: false,
	},
	{
		icon: false,
		path: "topic2",
		text: "TOPIC 2",
		active: false,
	},

	{
		icon: false,
		path: "topic3",
		text: "TOPIC 3",
		active: false,
	},

	{
		icon: false,
		path: "topic4",
		text: "TOPIC 4",
		active: false,
	},
	{
		icon: false,
		path: "topic5",
		text: "TOPIC 5",
		active: false,
	},
];

function BottomNav({ history, location }) {
	const [buttonActive, SetbuttonActive] = useState(InitialState);

	useEffect(() => {
		console.log(location);
		let pathName = location.pathname.split("/").join("");
		console.log(pathName);
		let newState = buttonActive.map((el) =>
			el.path === pathName ? { ...el, active: true } : { ...el, active: false }
		);
		SetbuttonActive(newState);
		// eslint-disable-next-line
	}, [location.pathname]);

	const handleClick = (item) => {
		history.push(`/${item.path}`);
	};

	return (
		<div className="bottom-nav-container">
			{buttonActive.map((item, idx) => {
				return (
					<NavButton key={idx} isActive={item.active}>
						{item.icon ? (
							<div onClick={() => handleClick(item)}>
								<HomeIcon />
								<span className="home-text">{item.text}</span>
							</div>
						) : (
							<span onClick={() => handleClick(item)}>{item.text}</span>
						)}
					</NavButton>
				);
			})}
		</div>
	);
}

export default withRouter(BottomNav);
