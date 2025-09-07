import pool from "../config/db.js";

export const RatingModel= {
    async createRating({user_id, store_id, rating, review}){
    const result = await pool.query(
        `INSERT INTO ratings (user_id, store_id, rating, review)
VALUES ($1,$2,$3, $4) RETURNING *`,
        [user_id, store_id, rating, review || null]
    );
    return result.rows[0];
    },
    async getAll(){
        const result = await pool.query(
        `SELECT r.*, u.name, AS user_name, s.name AS store_name
        FROM ratings r
        JOIN users u ON r.user_id = u.id
        JOIN stores s ON r.store_id = s.id
        ORDER BY r.id ASC`
        );
        return result.rows;
    },
    async findbyId(id) {
        const result = await pool.query("SELECT * FROM ratings WHERE id = $1", [id]);
        return result.rows[0] || null;
    },
};