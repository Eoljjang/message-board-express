// This pool.js page esssentially connects to the database for you.
const {Pool} = require("pg");
module.exports = new Pool({
    host: "localhost",
    user: "nathan_pulsemedica",
    database: "message_board",
    password: "1234",
    port: 5432
});
