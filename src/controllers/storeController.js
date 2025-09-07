import { StoreModel } from "../models/storeModel.js";

export const StoreController = {
    async createStore(req, res) {
        const { name, location, owner_id } = req.body;
        try {
            const store = await StoreModel.createStore({ name, location, owner_id });
            res.status(201).json(store);
        } catch (err) {
            console.error("❌ Error creating store:", err);
            res.status(500).json({ error: "Failed to create store" });
        }
    },

    async getStores(req, res) {
        try {
            const stores = await StoreModel.getAll();
            res.json(stores);
        } catch (err) {
            console.error("❌ Error fetching stores:", err);
            res.status(500).json({ error: "Failed to fetch stores" });
        }
    }
};
