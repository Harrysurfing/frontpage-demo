import React from "react";
import "./home-topics.style.scss";
import Background from "../../component/background/background.component";
import Sidebar from "../../component/sidebar/sidebar.component";
import BottomNav from "../../component/bottom-navbar/bottom-navbar.component";
import HomeTopic from "../../assets/hometopics.svg";
import { ReactComponent as ListIcon } from "../../assets/list-icon.svg";
import { withRouter } from "react-router-dom";

function HomeTopics({ history, match }) {
	console.log(match);
	return (
		<div>
			<Background src={HomeTopic}>
				<div className="icon-container">
					<ListIcon />
				</div>
				<Sidebar
					logoSize="small"
					headerText="lorem ipsum dolor sit"
					style={{ background: "#172843" }}
				>
					<button
						className="begin-button"
						onClick={() => history.push(`${match.path}/1`)}
					>
						BEGIN
					</button>
				</Sidebar>

				<BottomNav />
			</Background>
		</div>
	);
}

export default withRouter(HomeTopics);
