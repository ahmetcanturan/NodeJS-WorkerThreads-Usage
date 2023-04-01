import { parentPort } from "worker_threads";
import fs from "fs";
parentPort.on("message", (msg) => {
  const videos = JSON.parse(fs.readFileSync("./videos.json"));
  const finded_video = videos.filter((item) => item.id === Number(msg));
  parentPort.postMessage(finded_video);
});
