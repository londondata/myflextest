// require("dotenv").config();
const path = require('path')
console.log(require("dotenv").config({ path: '../.env' })
//this thing is absolute bullshit it literally works inside of seeds/index.js without pathing, AND on the students myflexspace. what??? this is literally just flextape until i have time to figure this out?
)
const cors = require("cors")
/* ==== External Modules ==== */
const express = require("express");
const methodOverride = require("method-override");

/* ==== Internal Modules ==== */
const routes = require("./routes");


/* ==== Instanced Modules  ==== */
const app = express();
/* ==== Configuration ==== */
const config = require("@myflexspace/config");

/* ====  Middleware  ==== */
app.use(cors())
// body data middleware
app.use(express.urlencoded({ extended: true }));
// method override middleware
app.use(methodOverride("_method"));

//for deployment
// to serve static files and to serve the react build
app.use(express.static(path.join("build")));
app.use(express.static("public"));

// logger
app.use((req, res, next) => {
	console.log(req.url, req.method);
	next();
});

/* ====  Routes & Controllers  ==== */

// Internal Routes
// All of our routes will start with "/api", we're going to route them through index.js
app.use("/api", routes);

//This is to catch anything that's trying to hit an api route that isn't made
app.all("/api/*", function (req, res, next) {
	res.send("THIS IS NOT AN API ROUTE");
});

//THIS IS THE REACT FULL STACK MAGIC MIDDLEWARE
// Anything that is NOT an api route will therefore be handled by React Router, which is set up right here. The API routes must hit first, order matters, then react via the React build directory.
/*
ANY REQUEST not covered by routes express makes -- will get piped to this middleware
and this middleware's job is to handover control to react
*/

//For deployments
app.use((req, res, next) => {
  console.log(req.headers);
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

/* ====  Server Listener  ==== */

app.listen(config.PORT, () => {
	console.log(`myflexspace is live at http://localhost:${config.PORT}`);
});