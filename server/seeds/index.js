require("dotenv").config()
//need dotenv here since we aren't accessing our server.js at all! 

//we bring in our db connection via models/index.js where it is currently set up
const db = require("../models")
const fs = require('fs')

//we can easily work with a json file to async/await creating users in thatjson file
//we need readFileSync to read the file and parse the JSON to something more easily manipulated
//we also need to pass in the file path for readFileSync
const userSeeds = JSON.parse(
    fs.readFileSync(`${__dirname}/users.json`)
)

//try/await is just like if/else but easier to distinguish errors with
//personally like to use it for seed since try/catch is common with testing!
const seedUsers = async () => {
    try {
        await db.User.create(userSeeds);
        console.log("Data created!")
    } catch (err) {
        console.log(err)
    }
}

//careful! this function deletes literally everything for User model in the db
const deleteUsers = async () => {
    try{
        await db.User.deleteMany()
        console.log("Data Destoryed!")
    } catch (err) {
        console.log(err)
    }
}

seedUsers()
// deleteUsers()


module.exports = {
    usersJSON: require("./users.json")
}