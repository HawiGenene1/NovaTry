import Booking from '../models/Booking.js';
import Property from '../models/Property.js';
import User from '../models/User.js';
import sendEmail from '../utils/sendEmail.js';

// @desc    Create a new booking/viewing
// @route   POST /api/bookings
// @access  Private
export const createBooking = async (req, res) => {
  try {
    const { propertyId, type, date, timeSlot, notes, leaseStartDate, leaseEndDate } = req.body;
    
    // Using mock auth logic if token isn't passed for setup flexibility
    const userId = req.user ? req.user._id : '64f0a0000000000000000001'; 

    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    const booking = new Booking({
      property: propertyId,
      user: userId,
      type,
      date,
      timeSlot,
      notes,
      leaseStartDate,
      leaseEndDate,
      status: 'pending' // defaults to pending
    });

    const savedBooking = await booking.save();

    // Send Notification Email
    try {
      const user = await User.findById(userId);
      if (user) {
        await sendEmail({
          email: user.email,
          subject: 'Booking Received - UrbanNest',
          message: `Hello ${user.name},\nWe have received your booking request for ${property.title} on ${date}. We will review it shortly.`,
        });
      }
    } catch (err) {
      console.error('Email notification failed', err);
    }

    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get logged in user bookings
// @route   GET /api/bookings/mybookings
// @access  Private
export const getMyBookings = async (req, res) => {
  try {
    const userId = req.user ? req.user._id : '64f0a0000000000000000001'; 
    const bookings = await Booking.find({ user: userId }).populate('property', 'title location price images');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update booking status (Admin/Agent)
// @route   PUT /api/bookings/:id/status
// @access  Private/Admin
export const updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const booking = await Booking.findById(req.params.id);

    if (booking) {
      booking.status = status;
      const updatedBooking = await booking.save();
      res.json(updatedBooking);
    } else {
      res.status(404).json({ message: 'Booking not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
