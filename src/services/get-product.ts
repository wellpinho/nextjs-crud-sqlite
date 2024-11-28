"use server";

import sqlite from "better-sqlite3";
import { redirect } from "next/navigation";

const db = sqlite("products.sqlite");

export const getProductById = async (id: string) => {
    try {
        return db.prepare(`SELECT * FROM products WHERE id=?`).run(id);
    } catch (error) {
        console.log(error);
    }

    redirect("/");
};
