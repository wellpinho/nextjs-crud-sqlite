import sqlite from "better-sqlite3";

const db = sqlite("products.sqlite");

const products = db.prepare(
    `SELECT * FROM products`
).all();

console.log(products)

// prepare(); is method used for compile a query
// the run(); method is used to execute queries
// The fetch data, the all(); method is used instead of run();

// db.prepare(
//     `CREATE TABLE IF NOT EXISTS products(
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name TEXT,
//         price REAL,
//         image TEXT
//     )`
// ).run();

// db.prepare(
//     `INSERT INTO products(name,price,image) VALUES(
//         'Apple',
//         30,
//         'apple.jpg'
//     )`
// ).run();

// db.prepare(
//     `INSERT INTO products(name,price,image) VALUES(
//         'Orange',
//         40,
//         'orange.jpg'
//     )`
// ).run();

// db.prepare(
//     `INSERT INTO products(name,price,image) VALUES(
//         'Banana',
//         20,
//         'bana.jpg'
//     )`
// ).run();