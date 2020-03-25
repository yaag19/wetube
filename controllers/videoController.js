import routes from "../routes";
import Video from "../models/Video";

export const videoHome = async (req, res) => {
    try {
        //await부분이 끝나기 전까지는 render부분을 실행하지 않음
        //단, 성공이나 실패여부를 따지지 않음(끝났다는게 중요)
        const videos = await Video.find({});
        res.render("home", {
            pageTitle: "Home",
            videos
        });
    } catch (error) {
        console.log(error);
        res.render("home", {
            pageTitle: "Home",
            videos: []
        });
    }

};


export const searchVideo = (req, res) => {
    const {
        query: {
            term: searchingBy
        }
    } = req;
    res.render("search", {
        pageTitle: "Search",
        searchingBy,
        videos
    });
};



//export const videos = (req, res) => res.render("videos");
export const getUpload = (req, res) =>
    res.render("upload", {
        pageTitle: "Upload"
    });

export const postUpload = async (req, res) => {
    const {
        body: {
            title,
            description
        },
        file: {
            path
        }
    } = req;

    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description,
        //path: path.replace(/\\/g, "/")
    });

    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
}

export const videoDetail = (req, res) => res.render("videoDetail", {
    pageTitle: "Video Detail"
});


export const editVideo = (req, res) => res.render("editVideo", {
    pageTitle: "Edit Video"
});


export const deleteVideo = (req, res) => res.render("deleteVideo", {
    pageTitle: "Delete Video"
});