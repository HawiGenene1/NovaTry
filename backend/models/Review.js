import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  
  isApproved: { type: Boolean, default: true } // Admin can flag/hide
}, {
  timestamps: true
});

const Review = mongoose.model('Review', reviewSchema);
export default Review;
