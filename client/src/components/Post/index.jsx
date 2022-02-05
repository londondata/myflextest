// Post component
import React from "react";
import Dopeness from "../Dopeness";

function Post(props) {
	return (
		<div>
			<h1>{props.title}</h1>
			<p>
				<b>By:</b> {props.author}
			</p>
			<div>
				<p>{props.body}</p>
			</div>
			<div>
				<Dopeness />
			</div>
		</div>
	);
}

export default Post;
