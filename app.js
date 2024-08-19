const express = require("express");
const app = express();
const path = require ("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Note: This middleware function is REQUIRED in order to parse
// data from a form. IE -> So that "req.body.name" works inside of
// "app.post()".
app.use(express.urlencoded({ extended: true })); 

// Serve static files (css).
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// --------------------------------------------------------------------------------------------------------- //

// Messages Array:
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date().toDateString()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date().toDateString()
    }
  ];

// Home Route:
app.get("/", (req, res) => {
    res.render("pages/index", {messages: messages});
});

// New Message Form Route:
app.get("/new", (req, res) => {
    res.render("pages/form", {hi: "Hi"});
})

// Handle "post" request from /new.
// The "name" attribute of the input field is accessed by: req.body.name
// In order to work, u need this line at top: app.use(express.urlencoded({ extended: true })); 
app.post("/new", (req, res) => {
    const newMessage = { 
        text: req.body.text,
        user: req.body.user,
        added: new Date().toDateString()
    }
    messages.push(newMessage);
    // Re-directs user back to the "/" path.
    // The "/" path already sees the updated "messages" array.
    // So there's no need to do another res.render() with the data. (save some performnace).
    res.redirect("/"); 
})


const PORT = process.env.PORT || 8080; // Uses environment port or defualt 8080.
app.listen(PORT, () => console.log(`listening on port: ${PORT}.`));