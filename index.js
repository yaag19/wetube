//exoress라는 이름의 폴더를 요구 1) 현재위치에서 찾다가 없으면 -> 2) node_modules에 가서 찾음
const express = require('express');

//app이라는 상수에 express를 실행해서 담음
const app = express();

const PORT = 4000;

function handleListening() {
    console.log(`Listening on : http://localhost:${PORT}`);
}

function handleHome(req, res) {
    console.log(req); //request object 한번 출력해봄
    res.send("Hello form home!");
}

function handleProfile(req, res) {
    res.send("You are on my profile~")
}

// root에 GET request를 함
app.get("/", handleHome);

app.get("/profile", handleProfile);
//listen : 연결 대기? 연결 요청 대기?
app.listen(4000, handleListening);

