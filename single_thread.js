import fs from "fs";
import express from "express";

const app = express();
const router = express.Router();
const timeList = [];

router.get("/:id", (req, res) => {
  const start = Date.now();
  const users = JSON.parse(fs.readFileSync("./users.json"));
  const images = JSON.parse(fs.readFileSync("./images.json"));
  const videos = JSON.parse(fs.readFileSync("./videos.json"));
  const finded_user = users.filter((item) => item.id === Number(req.params.id));
  const finded_image = images.filter(
    (item) => item.id === Number(req.params.id)
  );
  const finded_video = videos.filter(
    (item) => item.id === Number(req.params.id)
  );

  res.json({ user: finded_user, image: finded_image, video: finded_video });
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
app.listen(5000, () => {
  console.log("Single Thread running in 5000. port");
});
