import MaintenanceRequest from '../models/MaintenanceRequest.js';

// @desc    Create a maintenance request
// @route   POST /api/maintenance
// @access  Private
export const createMaintenanceRequest = async (req, res) => {
  try {
    const { propertyId, title, description, urgency } = req.body;
    const tenantId = req.user ? req.user._id : '64f0a0000000000000000001';

    const request = await MaintenanceRequest.create({
      property: propertyId,
      tenant: tenantId,
      title,
      description,
      urgency
    });

    res.status(201).json(request);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get all maintenance requests for a property
// @route   GET /api/maintenance/property/:propertyId
// @access  Private
export const getPropertyMaintenance = async (req, res) => {
  try {
    const requests = await MaintenanceRequest.find({ property: req.params.propertyId })
      .populate('tenant', 'name')
      .populate('assignedTo', 'name');
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
