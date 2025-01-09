import exp from "express"
import { getMetrics, getAllMetrics,
    getMetricById,
    createMetric,
    updateMetric,
    deleteMetric } from '../controller/metric.js';

const router = exp.Router();

// /api/metrics endpoint'i
router.get('/metrics', getMetrics);

router.get("/", getAllMetrics);

// 2) Tek metrik al
router.get("/:id", getMetricById);

// 3) Yeni metrik oluştur
router.post("/", createMetric);

// 4) Metrik güncelle (PUT)
router.put("/:id", updateMetric);

// 5) Metrik sil
router.delete("/:id", deleteMetric);


export default router;
