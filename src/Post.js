// Post component
import React from "react";

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
		</div>
	);
}

export default Post;
