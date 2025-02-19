//ex13-parameter.js
//라이트(URL) 파라미터로 동적 URL 처리하기

const express = require("express");
const app = express();
const PORT = 3000;

//인덱스 페이지
app.get("/", (req, res) => {
  res.status(200);
  res.send("hello express");
});
//게시글 목록 조회
app.get("/posts", (req, res) => {
  res.status(200);
  res.send("게시글 목록 조회");
});
//게시글 단건 조회
app.get("/posts/:id", (req, res) => {
  res.status(200);
  res.send(`게시글 단건 조회 id:${req.params.id}`);
});
//게시글 추가
app.post("/posts", (req, res) => {
  res.status(200);
  res.send("게시글 추가");
});
//게시글 수정
app.put("/posts/:id", (req, res) => {
  res.status(200);
  res.send(`게시글 단건 수정 id:${req.params.id}`);
});
//게시글 삭제
app.delete("/posts/:id", (req, res) => {
  res.status(200);
  res.send(`게시글 단건 삭제 id:${req.params.id}`);
});

app.listen(PORT, () => {
  console.log(`${PORT}번 포트에서 서버 실행 중...`);
});
