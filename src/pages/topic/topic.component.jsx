import React from "react";
import "./topic.style.scss";
import Background from "../../component/background/background.component";
import BackImg from "../../assets/topic-back.svg";
import Sidebar from "../../component/sidebar/sidebar.component";
import { ReactComponent as ListIcon } from "../../assets/list-icon.svg";
import Accordion from "../../component/accordion/accordion.component";
import { ReactComponent as LeftIcon } from "../../assets/left.svg";
import { withRouter } from "react-router-dom";

const text =
	"Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut. ";

const array = [1, 2, 3, 4, 5];

function Topic({ history, match }) {
	const id = parseInt(match.params.id, 10);
	const parentPath = match.path.replace(":id", "");

	const handleClick = (action) => {
		if (action === "back") {
			if (id === 1) {
				history.push(`${parentPath}`);
			} else {
				history.push(`${parentPath}${id - 1}`);
			}
		} else if (action === "next") {
			history.push(`${parentPath}${id + 1}`);
		}
	};

	return (
		<div>
			<Background src={BackImg}>
				<div className="icon-container">
					<ListIcon />
				</div>
				<Sidebar
					noLogo={true}
					headerText="nulla imperdiet"
					style={{
						background:
							"linear-gradient(90deg, rgba(0, 0, 0, 0.93) 76.12%, rgba(0, 0, 0, 0) 95.93%)",
					}}
				>
					<p className="paragrah">
						Vestibulum dapibus hendrerit nibh ut ornare.
					</p>
					<p className="feature-text">
						Sed porta, lorem a sodales rhoncus, neque ligula dictum libero, sit
						amet.
					</p>
				</Sidebar>

				<div className="accordion-container">
					{array.map((item, idx) => (
						<Accordion key={idx} title="lOREM IPSUM" text={text} />
					))}
					<Accordion title="lOREM IPSUM" text={text} />
				</div>
				<div className="page-control">
					<button
						className="page-button"
						onClick={() => {
							handleClick("back");
						}}
					>
						<LeftIcon />
						<span>BACK</span>
					</button>

					<button
						className="page-button"
						onClick={() => {
							handleClick("next");
						}}
					>
						<div className="rotate-icon">
							<LeftIcon />
						</div>

						<span>NEXT</span>
					</button>
				</div>
			</Background>
		</div>
	);
}

export default withRouter(Topic);
