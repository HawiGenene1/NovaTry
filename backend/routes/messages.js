import express from 'express';
import { sendMessage, getMyMessages } from '../controllers/messageController.js';

const router = express.Router();

router.route('/')
  .get(getMyMessages)
  .post(sendMessage);

export default router;
