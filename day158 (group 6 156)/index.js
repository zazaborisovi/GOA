import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import dotenv from "dotenv";
import { GridFSBucket } from "mongodb";
import { Readable } from "stream";

dotenv.config()
const app = express()

const upload = multer({ storage: multer.memoryStorage() })

let bucket;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.once("open", () => {
  console.log("MongoDB connected")
  bucket = new GridFSBucket(db.db, {
    bucketName: "songs",
  })
})

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).send("No file received")

  const readableStream = Readable.from(req.file.buffer);

  const uploadStream = bucket.openUploadStream(req.file.originalname, {
    contentType: req.file.mimetype,
  })

  readableStream.pipe(uploadStream)
    .on("error", (err) => {
      console.error("Error uploading file:", err)
      res.status(500).send("Upload failed");
    })
    .on("finish", () => {
      res.status(201).send("File uploaded successfully!")
    })
})

app.listen(3000, () => console.log("Server running on port 3000"))