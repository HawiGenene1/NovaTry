import Review from '../models/Review.js';
import Property from '../models/Property.js';

// @desc    Add a review for a property
// @route   POST /api/reviews
// @access  Private
export const createReview = async (req, res) => {
  try {
    const { propertyId, rating, comment } = req.body;
    const authorId = req.user ? req.user._id : '64f0a0000000000000000001'; 

    const property = await Property.findById(propertyId);
    if (!property) return res.status(404).json({ message: 'Property not found' });

    // Check if user already reviewed
    const alreadyReviewed = await Review.findOne({ property: propertyId, author: authorId });
    if (alreadyReviewed) {
      return res.status(400).json({ message: 'Property already reviewed' });
    }

    const review = await Review.create({
      property: propertyId,
      author: authorId,
      rating: Number(rating),
      comment
    });

    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get reviews for a specific property
// @route   GET /api/reviews/:propertyId
// @access  Public
export const getPropertyReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ property: req.params.propertyId, isApproved: true })
                                .populate('author', 'name');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
