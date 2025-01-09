import exp from "express"
import { getMetrics } from '../controller/metric.js';

const router = exp.Router();

// /api/metrics endpoint'i
router.get('/metrics', getMetrics);

export default router;
