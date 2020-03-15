/*exoress라는 이름의 폴더를 요구 1) 현재위치에서 찾다가 없으면 -> 2) node_modules에 가서 찾음
const express = require('express');*/
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

//app이라는 상수에 express를 실행해서 담음
const app = express();

const PORT = 4000;

/*function handleListening() {
    console.log(`Listening on : http://localhost:${PORT}`);
}

function handleHome(req, res) {
    console.log(req); //request object 한번 출력해봄
    res.send("Hello form home!");
}

function handleProfile(req, res) {
    res.send("You are on my profile~")
}*/

//arrow function (ES6문법)
const handleListening = () => console.log(`Listening on : http://localhost:${PORT}`);
const handleHome = (req, res) => res.send("Hello from home");
const handleProfile = (req, res, next) => res.send("you are on my profile~");

//미들웨어
const middleHome = (req, res, next) => {
    console.log("I'm middleHome!");
    // middleHome의 next를 호출하겠다 -> handleHome
    next();
};

/*기본적으로 웹사이트에서 일어나는 모든것에 대해(전역적으로) 미들웨어 적용할 때 : app.use 사용
소스코드상에서 미들웨어의 위치 *****중요*****
만약, app.get("/", handleHome); 다음줄에 app.user했다면 /home으로 갔을 때는 미들웨어 적용 X*/
//app.use(middleHome);

app.use(cookieParser());
app.use(bodyParser().json());
app.use(bodyParser().urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/profile", handleProfile);

/* route에 GET request를 함
 유저의 요청(/), 미들웨어, 마지막처리함수(응답함수) 
  / route에 대해서만 middleware를 적용할 때*/
//app.get("/", middleHome, handleHome);


//listen : 연결 대기? 연결 요청 대기?
app.listen(PORT, handleListening);

