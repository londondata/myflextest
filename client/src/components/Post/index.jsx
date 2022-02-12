// Post component
import React from "react";
import Dopeness from "../Dopeness";
// import { string } from "prop-types";

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

// Post.propTypes = {
// 	title: string.isRequired,
// 	author: string.isRequired,
// 	body: string.isRequired,
// };

// Post.defaultProps = {
// 	author: "Teri London",
// };

export default Post;
