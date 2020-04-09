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
globalRouter.post(routes.join, postJoin);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.logout, logout);

export default globalRouter;
