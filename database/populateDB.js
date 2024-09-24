// This is a script that automatically populates a database.
const { Client } = require("pg");

// Query to create a database
const createDB = `CREATE DATABASE IF NOT EXISTS message_board;`;

// Createy our SQL query.
const SQL = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 ),
    message VARCHAR (1000),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username, message, date)
VALUES
  ('Nathan', 'First message', CURRENT_TIMESTAMP),
  ('Lillian', 'Second message', CURRENT_TIMESTAMP),
  ('Johan', 'Third message', CURRENT_TIMESTAMP);
`;


const client = new Client({ // This client is for once the database is created.
    user: 'nathan_pulsemedica',
    host: 'localhost',
    port: 5432,
    password: '1234',
    database: 'message_board'
})

async function main(){
    try {
        await client.connect();
        console.log("Connected to message_board database");

        await client.query(SQL);
        console.log("Table created and data inserted.");
    }

    catch(error){
        console.log(error);
    }

    finally{
        await client.end();
        console.log("database client connection closed.");
    }
}

main();
