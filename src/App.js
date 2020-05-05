import React from "react";
import "./App.css";
import FrontPage from "./pages/front-page/front-page.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home.component";
import HomeTopics from "./pages/home-topics/home-topics.component";
import Topic from "./pages/topic/topic.component";

function App() {
	return (
		<Router>
			<Switch>
				<div className="App">
					<Route exact path="/" component={FrontPage} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/topic1" component={HomeTopics} />
					<Route path="/topic1/:id" component={Topic} />
				</div>
			</Switch>
		</Router>
	);
}

export default App;
