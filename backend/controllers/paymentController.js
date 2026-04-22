import Payment from '../models/Payment.js';

// @desc    Process a mock payment
// @route   POST /api/payments
// @access  Private
export const processPayment = async (req, res) => {
  try {
    const { propertyId, bookingId, amount, type, paymentMethod } = req.body;
    const userId = req.user ? req.user._id : '64f0a0000000000000000001';

    // Mock payment processing logic here
    const isSuccessful = Math.random() > 0.1; // 90% success rate

    const payment = await Payment.create({
      user: userId,
      property: propertyId,
      booking: bookingId,
      amount,
      type,
      paymentMethod,
      status: isSuccessful ? 'completed' : 'failed',
      transactionId: `TXN-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    });

    if (isSuccessful) {
      res.status(201).json({ message: 'Payment successful', payment });
    } else {
      res.status(400).json({ message: 'Payment failed, please try again', payment });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get user's payments
// @route   GET /api/payments/mypayments
// @access  Private
export const getMyPayments = async (req, res) => {
  try {
    const userId = req.user ? req.user._id : '64f0a0000000000000000001';
    const payments = await Payment.find({ user: userId })
      .populate('property', 'title')
      .sort({ createdAt: -1 });
    
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
