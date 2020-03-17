import express from "express";
import routes from "../routes";
import { users, userDetail, editProfile, changePassword } from "../controllers/userController";

//userRouter라는 변수만 export하겠다
//export const userRouter = express.Router();

const userRouter = express.Router();

//순서 중요한데, 정확히 어떤 순서여야하는지 모르겠다..
//userDetail이 users다음줄에 오면 editProfile이랑 change가 user detail에만 머물러 있다,, 대체 왜,,
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, userDetail);

//전체를 export하겠다
export default userRouter;

