//ex11-express-server.js
const express = require("express");
const app = express();
const PORT = 3000;

//express get메소드를 지원하는 서버 생성
app.get("/", (req, res) => {
  res.status(200); // OK
  //res.send("hello express");
  res.send("{ 'email': 'abc@mail.com'  }");
  //res.send("<!Doctype html><html></html>");
});

app.listen(PORT, () => {
  console.log(`${PORT}번 포트에서 서버 실행 중...`);
});
