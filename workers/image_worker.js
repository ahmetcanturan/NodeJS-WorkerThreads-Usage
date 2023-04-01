import { parentPort } from "worker_threads";
import fs from "fs";
parentPort.on("message", (msg) => {
  const images = JSON.parse(fs.readFileSync("./images.json"));
  const finded_image = images.filter((item) => item.id === Number(msg));
  parentPort.postMessage(finded_image);
});
