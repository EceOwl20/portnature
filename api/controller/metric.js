import Metric from  "../models/metric.js";

// Metrik verilerini MongoDB'den çeken fonksiyon
export const getMetrics = async (req, res) => {
  try {
    const metrics = await Metric.find();
    return res.status(200).json(metrics);
  } catch (error) {
    console.error('Metrik verileri alınamadı:', error);
    res.status(500).json({ error: 'Metrik verileri alınamadı' });
  }
};


