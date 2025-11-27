import crypto from "crypto";

function hashGenerator() {
  const hash = crypto.randomBytes(32).toString("hex")
  console.log(hash);
}

hashGenerator();