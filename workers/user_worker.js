import { parentPort } from "worker_threads";
import fs from "fs";
parentPort.on("message", (msg) => {
  const users = JSON.parse(fs.readFileSync("./users.json"));
  const finded_user = users.filter((item) => item.id === Number(msg));
  parentPort.postMessage(finded_user);
});
