import tellMyFlexSpaceTo from "./axios.config.js";

const posts = "/posts";

const getAll = () => {
	return tellMyFlexSpaceTo.get(`${posts}`);
};

const get = (id) => {
	return tellMyFlexSpaceTo.get(`${posts}/${id}`);
};

const create = (data) => {
	return tellMyFlexSpaceTo.post(`${posts}`, data);
};

const update = (id, data) => {
	return tellMyFlexSpaceTo.put(`${posts}/${id}`, data);
};

const destroy = (id) => {
	return tellMyFlexSpaceTo.delete(`${posts}/${id}`);
};

// you can only export default when there's one thing to export
export { getAll, get, create, update, destroy };
