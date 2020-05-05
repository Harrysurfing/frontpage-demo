import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		background: "transparent !important",
		marginBottom: 20,
		boxShadow: "none !important",
	},
	summary: {
		background: "#55C6D7",
		height: 70,
	},
	detail: {
		marginTop: 10,
		marginBottom: 10,
	},
	heading: {
		fontFamily: "Montserrat",
		fontStyle: "normal",
		fontWeight: "600",
		fontSize: "18px",
		lineHeight: "28px",
		paddingLeft: "20px",
	},
	text: {
		fontFamily: "Nunito",
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: "18px",
		lineHeight: "26px",
		letterSpacing: "0.02em",
		textAlign: "left",
		paddingLeft: 20,
		paddingRight: 20,
	},
}));

export default function Accordion({ title, text }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<ExpansionPanel>
				<ExpansionPanelSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					className={classes.summary}
				>
					<p className={classes.heading}>{title}</p>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails className={classes.detail}>
					<p className={classes.text}>{text}</p>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
}
