// db 연결설정에 관한 파일 
// dotenv : 유저데이터등을 숨기기 위해 사용
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL, {
        useNewUrlParser: true,
        useFindAndModify: false
    });

const db = mongoose.connection;

const handleOpen = () => console.log("* Connected to DB");
const handelError = error => console.log(`X Error on DB Connection ${error}`);
db.once("open", handleOpen);
db.on("error", handelError);