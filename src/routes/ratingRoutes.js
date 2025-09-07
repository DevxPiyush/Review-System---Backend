import { Router } from "express";
import { RatingController } from "../controllers/ratingController.js";

const router = Router();

router.post("/", RatingController.createRating);
router.get("/", RatingController.getRatings);

export default router;
