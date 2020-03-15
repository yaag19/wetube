//router.js --> userRouter.js 파일로 변경

import express from "express";
import routes from "../routes";

//userRouter라는 변수만 export하겠다
//export const userRouter = express.Router();
const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("USERS"));
userRouter.get(routes.userDetail, (req, res) => res.send("USER_DETAIL"));
userRouter.get(routes.editProfile, (req, res) => res.send("EDIT_PROFILE"));
userRouter.get(routes.changePassword, (req, res) => res.send("CHANGE_PASSWORD"));

//전체를 export하겠다
export default userRouter;

