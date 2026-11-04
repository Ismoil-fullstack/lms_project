import express from "express";
import staffController from "../controllers/staff.js"
import validation from "../middleware/validation.js";

const router = express.Router();

router.get('/staff', staffController.getAllStaff);
router.post('/staff', validation.createStaff, staffController.createStaff);
router.delete('/staff/:userId', staffController.deleteStaff);

export default router;