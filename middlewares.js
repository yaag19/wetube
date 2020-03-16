import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    //locals : 템플릿, 컨트롤러 등 전역적으로 사용할 수 있게 해 줌.
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;

    /*해당 미들웨어는 미들웨어와 라우트들 사이에 있으므로,
    라우트에게 req를 전달해주기 위해 next()가 필요하다.*/
    next();
}