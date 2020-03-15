import express from "express";
import routes from "../routes";
import { searchVideo, videoHome } from "../controllers/videoController";
import { join, login, logout } from "../controllers/userController";

const globalRouter = express.Router();

//vidoe관련
globalRouter.get(routes.home, videoHome);
globalRouter.get(routes.search, searchVideo);

//users관련
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);


export default globalRouter;
