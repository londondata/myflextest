import { useState } from "react";
import { func } from "prop-types";
import * as postService from "../../api/post.service";

const PostForm = ({ getPostsAgain }) => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [body, setBody] = useState("");

	const handleSubmit = async () => {
		let newPost = { title, author, body };
		const res = await postService.create(newPost);

		// res 201: created
		if (res.status === 201) {
			setTitle("");
			setAuthor("");
			setBody("");
			getPostsAgain();
		} else {
			alert("Server Error");
		}
	};

	return (
		<div>
			<input
				onChange={(e) => setTitle(e.target.value)}
				value={title}
				type="text"
				name="title"
				placeholder="input title value target homie"
			/>
			<input
				onChange={(e) => setAuthor(e.target.value)}
				value={author}
				type="text"
				name="author"
				placeholder="you, homie"
			/>
			<input
				onChange={(e) => setBody(e.target.value)}
				value={body}
				type="text"
				name="body"
				placeholder="input body value target, homie"
			/>
			<button onClick={handleSubmit}>Add Post +</button>
		</div>
	);
};

PostForm.propTypes = {
	getPostsAgain: func,
};

export default PostForm;
