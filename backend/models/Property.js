import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, enum: ['apartment', 'house', 'commercial', 'land'], required: true },
  status: { type: String, enum: ['for_sale', 'for_rent'], required: true },
  price: { type: Number, required: true },
  currency: { type: String, default: 'USD' },
  
  location: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    zipCode: { type: String },
    coordinates: {
      lat: { type: Number },
      lng: { type: Number }
    }
  },

  features: {
    bedrooms: { type: Number },
    bathrooms: { type: Number },
    areaSquareFeet: { type: Number },
    yearBuilt: { type: Number },
    amenities: [{ type: String }] // e.g., 'Pool', 'Gym', 'Parking'
  },

  media: {
    photos: [{ type: String }], // Array of URLs
    videos: [{ type: String }],
    virtualTourUrl: { type: String },
    floorPlanUrl: { type: String }
  },

  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  agent: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  
  approvalStatus: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },

  isAvailable: { type: Boolean, default: true }
}, {
  timestamps: true
});

const Property = mongoose.model('Property', propertySchema);
export default Property;
