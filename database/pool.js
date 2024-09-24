const {Pool} = require("pg");
module.exports = new Pool({
    host: "localhost",
    user: "nathan_pulsemedica",
    database: "top_users",
    password: "1234",
    port: 5432
});
