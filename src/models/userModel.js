import pool from "../config/db.js";

export const UserModel =  {
    async createUser({ name, email, password, address, role = "normal"}) {
        const result = await pool.query(
            "INSERT INTO users (name, email, password, address, role) VALUES ($1,$2,$3,$4,$5) RETURNING *",
          [name, email, password, address, role]
        );
        return result.rows[0];
    },
async findbyEmail(email) {
        const result = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );
        return result.rows[0];
},
    async findbyId(id) {
        const result = await pool.query(
            "SELECT * FROM users WHERE id = $1",
            [id]
        );
        return result.rows[0];
    },
    async getAll(){
        const result = await pool.query("SELECT * FROM users");
        return result.rows;
    }
};