import multer from "multer";
import routes from "./routes";
//multer : file을 업로드하면 url을 반환하는 미들웨어
const multerVideo = multer({
  // "/uploads/videos/" 라고 쓰면 컴퓨터의 root에 uploads폴더를 만들게 됨!
  dest: "uploads/videos/",
});

export const localsMiddleware = (req, res, next) => {
  //locals : 지역변수를 템플릿, 컨트롤러 등에 전역적으로 사용할 수 있게 해 줌.?
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;

  //template들이 user에 접근 가능하도록 함?
  res.locals.loggedUser = req.user || null;
  console.log(`req.user : ${req.user}`);
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

//single : 하나의 파일만 업로드 할 수 있다.
export const uploadVideo = multerVideo.single("videoFile");
