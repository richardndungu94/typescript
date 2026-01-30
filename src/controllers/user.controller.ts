import {Request,Response} from "express";
import userModel from "../models/user.model.js";

export const createUser = async(req:Request,res:Response) =>{
    try{
    const {username,email,password,gender} = req.body;
    const newUser = new userModel(req.body);
    const savedUser = await newUser.save();
    return res.status(200).json(savedUser);
    }catch(error){
    
        return res.status(401).json({message:"Something went wrong"})
    }
};
export const getUser = async(req:Request,res:Response) =>{
    try{
    const {id} = req.params;
    const user = await userModel.findById(id.trim());
    return res.status(200).json(user);
    }catch(error){
      
        return res.status(401).json({message:"Something went wrong"})
    }
};

export const getAllUsers = async(req:Request,res:Response) =>{
    try{
    const allUsers = await userModel.find();

    return res.status(200).json(allUsers);
    }catch(error){
        return res.status(401).json({message:"Something went wrong"})
    }
};

export const updateUser = async(req:Request,res:Response) =>{
   try{
    const {id} = req.params;
    const updates = req.body;
    const updatedUser = await userModel.findByIdAndUpdate(id.trim(), updates, {new: true});
    return res.status(200).json(updatedUser);

   }catch(error){
   
    return res.status(401).json({message:"Something went wrong"})
    }
};

export const deleteUser = async(req:Request,res:Response) =>{
    try{
    const {id} = req.params;
    await userModel.findByIdAndDelete(id.trim());
    return res.status(200).json({message:"user succesfuly deleted"});
    }catch(error){
        return res.status(401).json({message:"Something went wrong"})
    }
};