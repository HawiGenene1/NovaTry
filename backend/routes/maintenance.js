import express from 'express';
import { createMaintenanceRequest, getPropertyMaintenance } from '../controllers/maintenanceController.js';

const router = express.Router();

router.route('/')
  .post(createMaintenanceRequest);

router.route('/property/:propertyId')
  .get(getPropertyMaintenance);

export default router;
