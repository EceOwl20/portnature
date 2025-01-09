import express, { request } from "express";
import mongo from "mongoose";
import userRoute from "./routes/user.js";
import loginRegister from "./routes/loginRegister.js";
import blogRoute from "./routes/blog.js";
import cors from "cors";
import imageRoute from "./routes/images.js";
import pageRoute from "./routes/page.js";
import componentRoute from "./routes/components.js";
import metricRoute from "./routes/metric.js";
import Metric from  "./models/metric.js";

const connect = async () => {
    await mongo.connect("mongodb+srv://smbduknwn:1TL6SUtVqQDyWsnJ@port-nature.jvs90.mongodb.net/?retryWrites=true&w=majority&appName=Port-Nature", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
}

connect()
  .then(async () => {
    console.log("Bağlandı sorun yok...");
    await seedMetrics();
    console.log("Seed işlemi tamamlandı!");
  })
  .catch((db_error) => {
    console.log(db_error);
  });


const exp = express();
exp.use(express.json());
exp.use(cors())

exp.listen(3000, () => {
    console.log("Port Açıldı. Sorun yok");
});

exp.use("/api/giris", loginRegister);
exp.use("/api/user", userRoute);
exp.use("/api/blog", blogRoute);
exp.use("/api/images", imageRoute);
exp.use("/api/page", pageRoute);
exp.use("/api/components", componentRoute);
exp.use("/api/metric", metricRoute);

exp.use((error, request, response, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Kaynağı belli olmayan bir sorun var!";
    return response.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});

// Seed işlemi: Veritabanına başlangıç verisi ekleme
const seedMetrics = async () => {
  try {
    // network.bytesIn dokümanını bul
    const networkDoc = await Metric.findOne({ name: "network.bytesIn" });

    if (!networkDoc) {
      // Eğer yoksa tamamen oluştur
      await Metric.create({
        name: "network.bytesIn",
        dataPoints: [
          { timestamp: new Date(), value: 120 },
          { timestamp: new Date(), value: 150 },
        ],
      });
      console.log("network.bytesIn kayıt oluşturuldu.");
    } else {
      // Varsa sadece ekleme yap
      networkDoc.dataPoints.push({
        timestamp: new Date(),
        value: 200, // eklemek istediğiniz değer
      });
      await networkDoc.save();
      console.log("network.bytesIn kaydına yeni dataPoint eklendi.");
    }

    // connections.current benzeri bir mantıkla ekleme/güncelleme
    const connectionDoc = await Metric.findOne({ name: "connections.current" });
    if (!connectionDoc) {
      await Metric.create({
        name: "connections.current",
        dataPoints: [
          { timestamp: new Date(), value: 10 },
          { timestamp: new Date(), value: 15 },
        ],
      });
      console.log("connections.current kayıt oluşturuldu.");
    } else {
      connectionDoc.dataPoints.push({
        timestamp: new Date(),
        value: 20, // ek data
      });
      await connectionDoc.save();
      console.log("connections.current kaydına yeni dataPoint eklendi.");
    }

  } catch (error) {
    console.error("Seed verisi ekleme/güncelleme hatası:", error);
  }
};""