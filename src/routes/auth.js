import { Router } from "express";
import { signUp } from "../controllers/auth";

const router = Router();

router.get('/', signUp);

export default router;