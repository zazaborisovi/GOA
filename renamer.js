const fs = require("fs");

fs.readdirSync(".").forEach((folder) => {
  const match = folder.match(/^day(\d+)$/);
  if (match) {
    const num = parseInt(match[1], 10);
    const newName = `day${String(num).padStart(3, "0")}`;
    if (folder !== newName) {
      fs.renameSync(folder, newName);
      console.log(`Renamed: ${folder} -> ${newName}`);
    }
  }
});