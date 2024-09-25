const [getAllMessages, postMessage] = require("./database/queries.js"); // import queries.

// Logic for opening the homepage
exports.homePage = async (req, res) => {
    // To-Do: Open the database, get all content and pass it as "messages";
    try{
        const allMessages = await getAllMessages();
        console.log(allMessages);
        res.render("pages/index", {messages: allMessages, title: "Home Page"});
    }
    catch(error){
        res.render("pages/error_page", {error: error});
    }

}

// Logic for opening the page to add a new user
exports.formPage = (req, res) => {
    res.render("pages/form", {title: "New Message Page"});
}


// Logic for adding a new message.
exports.newMessage = async (req, res) => {
    // NEW: On the submit POST, it adds it to the database instead.
    try{
        await postMessage(req.body.username, req.body.message);
    }
    catch(error){
        res.render("pages/error_page", {error: error});
    }

    // Re-direct user back to "/". Note this simply runs the controller "homePage" function
    // which goes into the DB and gets all the messages and displays them.
    res.redirect("/");
}
