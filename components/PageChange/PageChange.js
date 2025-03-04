import React from "react";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Image from "next/image";

// core components
import {infoColor, title} from "styles/jss/nextjs-material-kit.js";

const useStyles = makeStyles({
	progress: {
		color: infoColor,
		width: "6rem !important",
		height: "6rem !important",
	},
	wrapperDiv: {
		margin: "100px auto",
		padding: "0px",
		maxWidth: "360px",
		textAlign: "center",
		position: "relative",
		zIndex: "9999",
		top: "0",
	},
	iconWrapper: {
		display: "block",
	},
	title: {
		...title,
		color: "#FFFFFF",
	},
});

export default function PageChange(props) {
	const classes = useStyles();
	return (
		<div>
			<div className={classes.wrapperDiv}>
				<div className={classes.iconWrapper}>
					<CircularProgress className={classes.progress}/>
				</div>
				<h4 className={classes.title}>
					<Image src={'/img/logos/logo_white.png'} width={200} height={52}/>
				</h4>
			</div>
		</div>
	);
}
