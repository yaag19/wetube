import express from "express";
import routes from "../routes";
import passport from "passport";
import { searchVideo, videoHome } from "../controllers/videoController";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout,
  githubLogin,
  postGithubLogin,
  getMe,
} from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

//vidoe관련
globalRouter.get(routes.home, videoHome);
globalRouter.get(routes.search, searchVideo);

//users관련
globalRouter.get(routes.join, onlyPublic, getJoin);
//postJoin으로 가입시키고(email과 password를 가지고 ) -> postLogin으로 로그인 시킴
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);
globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.gitHub, githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogin
);
globalRouter.get(routes.me, getMe);

export default globalRouter;
