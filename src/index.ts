import express, { Request, Response,} from "express";
import dotenv from "dotenv";
import userRoute from "./routes/users.route.js";
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.LIVE_DB!)
.then(() => { console.log("Connected to MongoDB"); })
.catch((error)=>{console.log("Failed to connect to MongoDB")
console.log(error);
});


const app = express();
app.get("/", (req: Request, res: Response) => {
    return res.json({message:"This is your application!"});
});

app.use(express.json());
app.use(userRoute);


app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});