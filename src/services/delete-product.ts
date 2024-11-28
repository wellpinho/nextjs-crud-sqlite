"use server";

import sqlite from "better-sqlite3";
import { redirect } from "next/navigation";

const db = sqlite("products.sqlite");

export const deleteProduct = async (id: string) => {
    try {
        db.prepare(`DELETE FROM products WHERE id=?`).run(id);
    } catch (error) {
        console.log(error);
    }

    redirect("/");
};
