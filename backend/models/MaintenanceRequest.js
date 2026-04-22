import mongoose from 'mongoose';

const maintenanceRequestSchema = new mongoose.Schema({
  property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
  tenant: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  
  title: { type: String, required: true },
  description: { type: String, required: true },
  
  urgency: { type: String, enum: ['low', 'medium', 'high', 'emergency'], default: 'medium' },
  status: { type: String, enum: ['open', 'in_progress', 'resolved', 'closed'], default: 'open' },
  
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // e.g., a maintenance worker or agent
  
  photos: [{ type: String }] // URLs to images showing the issue
}, {
  timestamps: true
});

const MaintenanceRequest = mongoose.model('MaintenanceRequest', maintenanceRequestSchema);
export default MaintenanceRequest;
