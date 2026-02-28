const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: [
    'http://192.168.100.10:8081',
    'http://192.168.100.10:3000',
    'http://localhost:8081',
    'http://localhost:3000'
  ]
}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});