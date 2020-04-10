import express from "express";
import routes from "../routes";
import { searchVideo, videoHome } from "../controllers/videoController";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout,
} from "../controllers/userController";

const globalRouter = express.Router();

//vidoe관련
globalRouter.get(routes.home, videoHome);
globalRouter.get(routes.search, searchVideo);

//users관련
globalRouter.get(routes.join, getJoin);
//postJoin으로 가입시키고(email과 password를 가지고 ) -> postLogin으로 로그인 시킴
globalRouter.post(routes.join, postJoin, postLogin);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.logout, logout);

export default globalRouter;
