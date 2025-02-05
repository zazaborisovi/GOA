const fs = require('fs')

fs.readdir('C:/Desktop/New folder/GOA', { withFileTypes: true }, (err, files) => {
    if (err) {
      console.log("Error reading the folder:", err);
      return;
    }
})