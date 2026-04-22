import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
  booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' },
  
  amount: { type: Number, required: true },
  currency: { type: String, default: 'USD' },
  
  type: { type: String, enum: ['deposit', 'rent', 'full_payment'], required: true },
  status: { type: String, enum: ['pending', 'completed', 'failed', 'refunded'], default: 'pending' },
  
  paymentMethod: { type: String }, // e.g., 'credit_card', 'bank_transfer'
  transactionId: { type: String, unique: true, sparse: true }
}, {
  timestamps: true
});

const Payment = mongoose.model('Payment', paymentSchema);
export default Payment;
