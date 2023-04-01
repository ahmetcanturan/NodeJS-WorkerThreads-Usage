import express from "express";
import { findUserById, findImageById, findVideoById } from "./data_service.js";
const app = express();
const router = express.Router();

const timeList = [];
router.get("/:id", async (req, res) => {
  const start = Date.now();
  const [user, image, video] = await Promise.all([
    findUserById(req.params.id),
    findImageById(req.params.id),
    findVideoById(req.params.id),
  ]);
  res.json({ user, image, video });
  const stop = Date.now();
  const time = stop - start;
  timeList.push(time);
  let sum = timeList.reduce((acc, curr) => acc + curr, 0);
  console.log(
    `${timeList.length} Request İçin Ortalama Response Süresi : ${
      sum / timeList.length
    } ms`
  );
});

app.use(router);
app.listen(4000, () => {
  console.log("Multi Thread running in 4000. port");
});
