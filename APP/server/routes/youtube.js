import express from "express";
const router = express.Router();

import { getVideoList } from "../apis/youtube.js";

//getVideoSearch
router.get("/", function (req, res, next) {
  res.render("index", { title: "React" });
  res.header("Access-Control-Allow-Origin", "https://sruptube.herokuapp.com/");
});

// 인기 동영상 20개 router
router.get("/videos", async function (req, res, next) {
  const result = await getVideoList(req.query);
  res.header("Access-Control-Allow-Origin", "https://sruptube.herokuapp.com/");
  res.send(result);
});

// 검색 동영상 20개 router
// router.get("/search", async function (req, res, next) {
//   const result = await getVideoSearch(req.query);
//   res.header("Access-Control-Allow-Origin", "https://sruptube.herokuapp.com/");
//   res.send(result);
// });

export default router;
