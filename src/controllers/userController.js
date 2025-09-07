import {UserModel} from "../models/userModel.js";
export const UserController = {
    async createUser(req, res) {
        const { name, email, password, address, role } = req.body;
        try {
            const user = await UserModel.createUser({ name, email, password, address, role });
            res.status(201).json(user);
        } catch (err) {
            console.error("Error creating user:", err);
            res.status(500).json({ error: "Failed to create user" });
        }
    },
    async getUsers(req, res) {
        try {
            const users = await UserModel.getAll();
            res.json(users);
        } catch (err) {
            console.error("Error fetching users:", err);
            res.status(500).json({ error: "Failed to fetch users" });
        }
    }
};