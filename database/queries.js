const pool = require("./pool"); // Import the pool of clients.

async function getAllMessages(){
    const {rows} = await pool.query("SELECT * FROM users");
    return rows;
}

async function postMessage(username, message){
    const query = "INSERT INTO users (username, message, date) VALUES ($1, $2, NOW())";
    const values = [username, message];
    await pool.query(query, values);
}


module.exports = [getAllMessages, postMessage];
