//ex15-res-html.js
//정적 HTML로 응답하기

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {});

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중...`);
});
