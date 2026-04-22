import express from 'express';
import { createReview, getPropertyReviews } from '../controllers/reviewController.js';

const router = express.Router();

router.route('/')
  .post(createReview);

router.route('/:propertyId')
  .get(getPropertyReviews);

export default router;
