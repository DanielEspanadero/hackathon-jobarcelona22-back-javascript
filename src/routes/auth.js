import { Router } from 'express';
import { check } from 'express-validator';

import { signUp, logIn } from '../controllers/auth';

import { checkFields } from '../middlewares/check-fields';
import { checkDuplicateUsernameOrEmail, checkRolesExisted } from '../middlewares/verify-signup';

const router = Router();

// 
router.post('/signup', [
    check('username', 'Username is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'The password must have: Minimum 8 characters, maximum 15, at least one capital letter, at least one lowercase letter, at least one digit, no blanks, at least 1 special character').not().isEmpty().isLength({ min: 8, max: 15 }).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&](?=.*[!@#$%^&*])/),
    checkFields,
    checkDuplicateUsernameOrEmail,
    checkRolesExisted
], signUp);
router.post('/login', logIn);

export default router;