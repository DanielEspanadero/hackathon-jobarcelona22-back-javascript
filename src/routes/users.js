import { Router } from "express";
import { users } from "../controllers/users";

import { validateToken, isAdmin } from "../middlewares/validate-jwt";

const router = Router();

router.get('/', [validateToken, isAdmin], users);

export default router;