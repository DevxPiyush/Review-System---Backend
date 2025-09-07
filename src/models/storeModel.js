import pool from "../config/db.js";

export const StoreModel = {
    async createStore({ name, location, owner_id }){
        const result = await pool.query (
            `INSERT INTO stores (name, location, owner_id)
VALUES ($1,$2,$3) RETURNING *`,
            [name, location, owner_id]
        );
        return result.rows[0];
    },

    async getAll(){
        const result = await pool.query("SELECT * FROM stores ORDER BY id ASC");
        return result.rows;
    },

    async findbyId(id){
        const result  = await pool.query("SELECT * FROM stores WHERE id = $1", [id])
    return result.rows [0] || null;
    },
};