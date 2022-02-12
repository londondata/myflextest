import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./containers/HomePage";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	// browser router helps keep UI in sync with URLs using Router
	// best to wrap BrowserRouter at the highest level in the application (index.js)
	<BrowserRouter>
		<React.StrictMode>
			<HomePage />
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById("root")
);
