import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import {
    localsMiddleware
} from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
const app = express();

//미들웨어 사용
app.use(helmet());
app.set("view engine", "pug"); //pug 세팅, pug는 express의 view engine, views폴더가 디폴트
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan("dev"));
//local변수를 global변수로 사용하도록 만들어 주는 미들웨어
app.use(localsMiddleware);

//라우터 사용
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);


export default app;