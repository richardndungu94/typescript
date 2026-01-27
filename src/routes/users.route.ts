import express,{Request,Response} from "express";
import {createUser,getAllUsers, getUser,updateUser,deleteUser} from "../controllers/user.controller.js";
const router =express.Router();

router.post("/user",createUser);
router.get("/users",getAllUsers)
router.get("/user/:id",getUser);
router.put("/user/:id",updateUser);
router.delete("/user/:id",deleteUser);

export default router;