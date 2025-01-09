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


// 1) Tüm metrikleri al (GET /api/metric)
export const getAllMetrics = async (req, res) => {
  try {
    const metrics = await Metric.find();
    res.status(200).json(metrics);
  } catch (error) {
    console.error("getAllMetrics error:", error);
    res.status(500).json({ message: "Metrics could not be retrieved" });
  }
};

// 2) Tek metrik bilgisi al (GET /api/metric/:id)
export const getMetricById = async (req, res) => {
  try {
    const { id } = req.params;
    const metric = await Metric.findById(id);
    if (!metric) {
      return res.status(404).json({ message: "Metric not found" });
    }
    res.status(200).json(metric);
  } catch (error) {
    console.error("getMetricById error:", error);
    res.status(500).json({ message: "Metric could not be retrieved" });
  }
};

// 3) Yeni metrik oluştur (POST /api/metric)
export const createMetric = async (req, res) => {
  try {
    // Örnek body: { "name": "network.bytesOut", "dataPoints": [ { "timestamp": "...", "value": 123 } ] }
    const { name, dataPoints } = req.body;
    const newMetric = new Metric({ name, dataPoints });
    const savedMetric = await newMetric.save();
    res.status(201).json(savedMetric);
  } catch (error) {
    console.error("createMetric error:", error);
    res.status(500).json({ message: "Failed to create metric" });
  }
};

// 4) Metrik güncelle (PUT veya PATCH /api/metric/:id)
export const updateMetric = async (req, res) => {
  try {
    const { id } = req.params;
    // PUT ile tam dokümanı değiştirirsiniz, PATCH ile kısmi alanları
    // Burada PUT örneğini veriyorum:
    const { name, dataPoints } = req.body;

    const updated = await Metric.findByIdAndUpdate(
      id,
      { name, dataPoints },
      { new: true } // new: true → güncellenmiş dokümanı döndür
    );

    if (!updated) {
      return res.status(404).json({ message: "Metric not found" });
    }
    res.status(200).json(updated);
  } catch (error) {
    console.error("updateMetric error:", error);
    res.status(500).json({ message: "Failed to update metric" });
  }
};

// 5) Metrik sil (DELETE /api/metric/:id)
export const deleteMetric = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Metric.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Metric not found" });
    }
    res.status(200).json({ message: "Metric deleted successfully" });
  } catch (error) {
    console.error("deleteMetric error:", error);
    res.status(500).json({ message: "Failed to delete metric" });
  }
};

