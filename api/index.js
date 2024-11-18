import express, { request } from "express";
import mongo from "mongoose";

const connect = async () => {
    await mongo.connect("mongodb+srv://smbduknwn:1TL6SUtVqQDyWsnJ@port-nature.jvs90.mongodb.net/?retryWrites=true&w=majority&appName=Port-Nature");
}

connect()
.then(()=>{
    console.log("Bağlandı sorun yok...");
})
.catch((db_error)=>{
    console.log(db_error);
})

const exp = express();
exp.use(express.json());

exp.listen(3000, () => {
    console.log("Port Açıldı. Sorun yok");
});


exp.use((error, request, response, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Kaynağı belli olmayan bir sorun var!";
    return response.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});