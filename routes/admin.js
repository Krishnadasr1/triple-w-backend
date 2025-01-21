import express from 'express';
import { getallUsers } from '../controller/admin.js';


const router = express.Router();


router.get('/getUsers', getallUsers);

export default router;