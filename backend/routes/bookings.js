import express from 'express';
import { 
  createBooking, 
  getMyBookings, 
  updateBookingStatus 
} from '../controllers/bookingController.js';
// To add later: import { protect, agent } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .post(createBooking); // Should be .post(protect, createBooking)

router.route('/mybookings')
  .get(getMyBookings); // Should be .get(protect, getMyBookings)

router.route('/:id/status')
  .put(updateBookingStatus); // Should be .put(protect, agent, updateBookingStatus)

export default router;
