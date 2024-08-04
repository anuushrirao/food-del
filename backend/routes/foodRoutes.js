import express from 'express';
import bodyParser from 'body-parser';
import { addFood,listFood,removeFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

foodRouter.use(bodyParser.json()); // Add this line to parse JSON bodies

// Image Storage 
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()} ${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)

export default foodRouter;
