import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/HomePage";
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
	// browser router helps keep UI in sync with URLs using Router
	// best to wrap BrowserRouter at the highest level in the application (index.js)
	<BrowserRouter>
		<React.StrictMode>
			<Home />
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById("root")
);
