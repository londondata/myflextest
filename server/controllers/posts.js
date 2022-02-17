// Post Controller
const db = require("../models");

// Index - GET - Presentational (all of a resource)
const index = (req, res) => {
    db.Post.find()
        .exec((err, allPosts) => {
            return res.status(200).json({
                message: "Success",
                data: allPosts,
            });
        });
};

// Show - GET - Presentational (id)
const show = (req, res) => {
    db.Post.findById(req.params.id, (err, foundPost) => {
        if (err) return console.log("Error in Posts#show:", err);

        return res.status(200).json({
            message: "Success",
            data: foundPost,
        });
    });
};

// Create - POST - Functional (Status code 201)
const create = (req, res) => {
    db.Post.create(req.body, (err, savedPost) => {
        console.log(savedPost, "SAVED POST IN CREATE POST");
        if (err) return console.log("Error in Posts#create:", err);

        return res.status(201).json({
            message: "Success",
            data: savedPost,
        });
    });
};

// Update - PUT - Functional (id)
const update = (req, res) => {
    db.Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedPost) => {
            if (err) console.log("Error in Posts#update:", err);

            return res.status(202).json({
                message: "Success",
                data: updatedPost,
            });
        }
    );
};

// Destroy - DELETE - Functional (id)
const destroy = (req, res) => {
    db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
        if (err) console.log("Error in Posts#destroy:", err);

        return res.status(200).json({
            message:"Success",
            data: deletedPost,
        });
    });
};

module.exports = { 
    index,
    show,
    create,
    update,
    destroy
 };