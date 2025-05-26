import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import Song from "./models/songs.js";

import { connectDB, gfs } from './db/connectDB.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

// Connect to MongoDB
await connectDB(); // <-- Await this before using gfs

const AUDIO_FOLDER = path.join(__dirname, 'audio');

// Upload endpoint
app.post('/upload/:filename', async (req, res) => {
  try {
    const filename = req.params.filename;
    const filePath = path.join(AUDIO_FOLDER, filename);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'File not found in audio folder' });
    }

    const uploadStream = gfs.openUploadStream(filename, {
      metadata: {
        uploadedFrom: 'audio folder',
        uploadDate: new Date()
      }
    })

app.get('/songs', async (req, res) => {
    try {
      const songs = await Song.find({});
      res.json(songs)
    } catch (err) {
      console.error('Error fetching songs:', err)
      res.status(500).json({ error: 'Failed to fetch songs' })
    }
  })

    const readStream = fs.createReadStream(filePath);

    readStream.pipe(uploadStream)
      .on('error', (err) => {
        console.error('Upload error:', err);
        res.status(500).json({ error: 'Upload failed' });
      })
      .on('finish', () => {
        res.status(201).json({
          message: 'File uploaded successfully',
          fileId: uploadStream.id,
          filename: filename
        });
      });

  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});