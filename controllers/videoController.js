import { videos } from "../db"
/* views폴더에 home이라는 파일을 찾음. reder()의 첫번쨰 인자는 템플릿이고, 두번째 인자는 템플릿게 추가할 정보가 담긴 객체
 views폴더는 Express에서 app.set의 디폴트 폴더야*/
export const videoHome = (req, res) => {
    res.render("home", { pageTitle: "Home", videos });
}


export const searchVideo = (req, res) => {
    //ES6 이전 방식
    //const searchingBy = req.query.term;

    //ES6 방식
    const { query: { term: searchingBy } } = req;
    // searchingBy : "searchingBy"
    res.render("search", { pageTitle: "Search", searchingBy });
}



//export const videos = (req, res) => res.render("videos");
export const upload = (req, res) => res.render("upload", { pageTitle: "Upload" });


export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });


export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });


export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });