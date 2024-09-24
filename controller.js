// Logic for opening the homepage
exports.homePage = (req, res) => {
    // To-Do: Open the database, get all content and pass it as "messages";
    res.render("pages/index", {messages: messages});
}

// Logic for opening the page to add a new user
exports.formPage = (req, res) => {
    res.render("pages/form", {hi: "Hi"});
}


// Logic for adding a new message.
exports.newMessage = (req, res) => {
    // NEW: On the submit POST, it adds it to the database instead.



    // Re-directs user back to the "/" path.
    // The "/" path already sees the updated "messages" array.
    // So there's no need to do another res.render() with the data. (save some performnace).
    res.redirect("/");
}

// Opens database, gets messages.
