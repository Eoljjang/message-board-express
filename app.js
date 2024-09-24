const express = require("express");
const app = express();
const path = require ("node:path");
const { Client } = require("pg");
const router = require("./routes")
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Note: This middleware function is REQUIRED in order to parse
// data from a form. IE -> So that "req.body.name" works inside of
// "app.post()".
app.use(express.urlencoded({ extended: true }));

// Serve static files (css).
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Use the router
app.use("/", router);

const PORT = process.env.PORT || 8080; // Uses environment port or defualt 8080.
app.listen(PORT, () => console.log(`listening on port: ${PORT}.`));

// Global messages array.
// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date().toDateString()
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date().toDateString()
//   }
// ];

// module.exports = messages;
