import React from "react";
import "./home.style.scss";
import Background from "../../component/background/background.component";
import BackgroundImg from "../../assets/home1-bg.svg";
import Sidebar from "../../component/sidebar/sidebar.component";
import { ReactComponent as ListIcon } from "../../assets/list-icon.svg";
import BottomNav from "../../component/bottom-navbar/bottom-navbar.component";

function Home() {
	return (
		<div className="home-container">
			<Background src={BackgroundImg}>
				<div className="icon-container">
					<ListIcon />
				</div>
				<Sidebar
					logoSize="mid"
					headerText="lorem ipsum"
					style={{ background: "#172843" }}
				>
					<p className="text-area">Lorem ipsum dolor sit amet, ....</p>
				</Sidebar>
				<BottomNav />
			</Background>
		</div>
	);
}

export default Home;
