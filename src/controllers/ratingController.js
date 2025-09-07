import {RatingModel} from "../models/ratingModel.js";

export const RatingController = {
    async createRating(req,res) {
        const {user_id, store_id, rating, review} = req.body;
        try {
            const newRating = await RatingModel.createRating({ user_id, store_id, rating, review});
            res.status(201).json(newRating);
        } catch (err){
            console.log("Error creating rating: ", err);
            res.status(500).json({ error: "Failed to create rating"});
        }
    },
    async getRatings(req,res) {
     try {
         const ratings = await RatingModel.getAll();
     }  catch (err) {
         console.error("Error fetching ratings:", err);
         res.status(500).json({error: "failed to fetch ratings"});
     }
    }
};