// views폴더에 home이라는 폴더를 찾음. reder()의 첫번쨰 인자는 템플릿이고, 두번째 인자는 템플릿게 추가할 정보가 담긴 객체
export const videoHome = (req, res) => res.render("home", { pageTitle: "Home" });
export const searchVideo = (req, res) => res.render("search", { pageTitle: "Search" });

//export const videos = (req, res) => res.render("videos");
export const upload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });