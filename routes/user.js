import express from 'express';
import multer from 'multer';
import {createUser} from '../controller/user.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  
const upload = multer({ storage });

router.post('/submit', upload.array('images', 10), createUser);

export default router;