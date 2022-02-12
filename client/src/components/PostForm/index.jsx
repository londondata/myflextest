import { useState } from "react";
// import { func } from "prop-types";
import * as postService from "../../api/post.service";

const PostForm = () => {
	const [title, setTitle] = useState("");
	// const [author, setAuthor] = useState("");
	const [body, setBody] = useState("");

	const handleSubmit = async () => {
		let newPost = { title, body };
		let res = await postService.create(newPost);
		// let res = await postService.getAll();

		console.log(res);
		// console.log(newPost);

		if (!res.ok) {
			alert(`Server Error Status Code: ${res.status}`);
		} else {
			// setTitle("");
			// // setAuthor("");
			// setBody("");
			console.log(newPost);
		}
	};

	return (
		<div>
			<form>
				<label>
					Post Title:
					<input
						onChange={(e) => setTitle(e.target.value)}
						value={title}
						type="text"
						name="title"
						placeholder="input title value target homie"
					/>
				</label>
				{/* <label>
					Author:
					<input
						onChange={(e) => setAuthor(e.target.value)}
						value={author}
						type="text"
						name="author"
						placeholder="you, homie"
					/>
				</label> */}
				<label>
					What's on your mind, homie?
					<textarea
						onChange={(e) => setBody(e.target.value)}
						value={body}
						type="text"
						name="body"
						placeholder="input body value target, homie"
					/>
				</label>
			</form>
			<button onClick={handleSubmit}>Add Post +</button>
		</div>
	);
};

// PostForm.propTypes = {
// 	getPostsAgain: func,
// };

export default PostForm;
