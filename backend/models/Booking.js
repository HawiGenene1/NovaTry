import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  
  type: { type: String, enum: ['viewing', 'reservation'], required: true },
  
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled', 'completed'], default: 'pending' },
  
  date: { type: Date, required: true },
  timeSlot: { type: String }, // e.g., "10:00 AM - 11:00 AM" for viewings
  
  notes: { type: String },
  
  // Specific for reservations
  leaseStartDate: { type: Date },
  leaseEndDate: { type: Date }
}, {
  timestamps: true
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
