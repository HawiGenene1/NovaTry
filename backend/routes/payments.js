import express from 'express';
import { processPayment, getMyPayments } from '../controllers/paymentController.js';

const router = express.Router();

router.route('/')
  .post(processPayment);

router.route('/mypayments')
  .get(getMyPayments);

export default router;
