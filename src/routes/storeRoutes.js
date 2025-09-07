import { Router } from "express";
import { StoreController } from "../controllers/storeController.js";

const router = Router();

router.post("/", StoreController.createStore);
router.get("/", StoreController.getStores);

export default router;
