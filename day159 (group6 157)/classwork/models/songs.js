import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  length: { type: Number },
  chunkSize: { type: Number },
  uploadDate: { type: Date },
  metadata: {
    uploadedFrom: { type: String },
    uploadDate: { type: Date }
  },
  contentType: { type: String },
}, { collection: "music.files" });

const Song = mongoose.model("Song", songSchema);

export default Song;