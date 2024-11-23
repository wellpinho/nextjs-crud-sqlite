import sqlite from "better-sqlite3";
const db = sqlite("products.sqlite");

export const getProducts = () => {
    return db.prepare(`SELECT * FROM products`).all();
};
