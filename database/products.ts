import sqlite from "better-sqlite3";
const db = sqlite("products.sqlite");

export const getProducts = () => {
    return db.prepare(`SELECT * FROM products`).all();
};

export const createProduct = (name, price, image) => {
    return db
        .prepare(`INSERT INTO products(name, price, image) VALUES(?,?,?)`)
        .run(name, price, image);
};
