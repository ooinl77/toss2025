//세션은 서버에 저장되는 정보이고, 주로 사용자 인증(로그인)에 사용된다.
//로그아웃하면 대부분 사라지는 벙보이다.

//세션 저장하는 곳
//1. 서버 pc파일(환경설정)
//2. 몽고DB에 세션을 자동으로 저장해준다.

//세션 관리 - 미들웨어
// npm i express-sessioin connect-mongo

const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const app = express();
app.use(cookieParser());

//미들웨어 express-session 등록
app.use(
  session({
    name: "connect.sid", //connect.sid이 기본값, 유니크아이디
    secret: "secret code", //암호화 seed 문구
    resave: false, //세션정보의 변경이 있을 때만 저장
    saveUninitialized: true, //초기화되지 않는 세션정보도 저장
    store: MongoStore.create({ mongoUrl: process.env.DB_CONNECT }),
    cookie: { maxAge: 60 * 60 * 24 * 1000 }, //쿠키 유효기간이 24시간으로 설정
  })
);

app.get("/", (req, res) => {
  if ((req.session, count)) {
    // 클라에 세션정보(방문횟수 count)가 있는지?
    req.session.count++;
    res.write("<p>Count:" + req.session.count + "</p>");
    res.send();
  } else {
    //첫방문시
    req.session.count = 1;
    res.send("첫방문입니다");
  }
});

app.listen(5000, () => {
  console.log("5000번 포트에서 서버 실행 중");
});


