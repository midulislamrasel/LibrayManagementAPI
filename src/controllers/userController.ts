import { Request, Response } from "express";
import User from "../models/User";

// Create user
export const createUser = async (req:Request, res:Response)=>{
    const {name, email, role} = req.body;

    try{
        const newUser = new User({name,email,role});
        await newUser.save();
        res.status(201).json(newUser);
    }catch(error){
        res.status(400).json({message:'user creation faild', error})
    }
};


// Get all User
export const getUsers = async (req:Request, res:Response)=>{
    const users = await User.find();
    res.json(users)
}

// Get single user
export const getUserById = async (req: Request, res: Response) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  };
  
  // Delete user
  export const deleteUser = async (req: Request, res: Response) => {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
  };