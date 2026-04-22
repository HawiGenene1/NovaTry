import Message from '../models/Message.js';

// @desc    Send a message
// @route   POST /api/messages
// @access  Private
export const sendMessage = async (req, res) => {
  try {
    const { receiverId, propertyId, content } = req.body;
    const senderId = req.user ? req.user._id : '64f0a0000000000000000001';

    const message = await Message.create({
      sender: senderId,
      receiver: receiverId,
      property: propertyId,
      content
    });

    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get all messages for the logged-in user
// @route   GET /api/messages
// @access  Private
export const getMyMessages = async (req, res) => {
  try {
    const userId = req.user ? req.user._id : '64f0a0000000000000000001';
    
    // Get messages where user is either sender or receiver
    const messages = await Message.find({
      $or: [{ sender: userId }, { receiver: userId }]
    })
    .populate('sender', 'name email')
    .populate('receiver', 'name email')
    .populate('property', 'title')
    .sort({ createdAt: -1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
