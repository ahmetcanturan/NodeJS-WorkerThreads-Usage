import { Worker } from "worker_threads";

const userWorker = new Worker("./workers/user_worker.js");
const imageWorker = new Worker("./workers/image_worker.js");
const videoWorker = new Worker("./workers/video_worker.js");

export const findUserById = (id) => {
  return new Promise((resolve) => {
    userWorker.postMessage(id);
    const onMessage = (msg) => {
      resolve(msg);
      userWorker.removeListener("message", onMessage);
    };
    userWorker.on("message", onMessage);
  });
};

export const findImageById = (id) => {
  return new Promise((resolve) => {
    imageWorker.postMessage(id);
    const onMessage = (msg) => {
      resolve(msg);
      imageWorker.removeListener("message", onMessage);
    };
    imageWorker.on("message", onMessage);
  });
};

export const findVideoById = (id) => {
  return new Promise((resolve) => {
    videoWorker.postMessage(id);
    const onMessage = (msg) => {
      resolve(msg);
      videoWorker.removeListener("message", onMessage);
    };
    videoWorker.on("message", onMessage);
  });
};
