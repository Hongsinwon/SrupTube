import express from "express";
import path from "path";
import cors from "cors";

//router 불러오기
import youtubeRouter from "./server/routes/youtube.js";

const app = express();

const __dirname = path.resolve();
const port = process.env.PORT || "8080";

//cors 설정
const corsOptions = {
  origin: "https://sruptube.herokuapp.com/",
  credentials: true,
};

//cors
app.use(cors(corsOptions));

// build파일 불러오기
app.use(express.static(path.join(__dirname, "./client/build"))); //__dirname => 현재 경로
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.use("/", youtubeRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(port, () => {
  console.log("Express server listening on port %d in %s mode");
});

export default app;
