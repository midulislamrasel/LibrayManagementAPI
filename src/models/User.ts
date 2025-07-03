import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String, require:true, unique:true},
    role:{type:String, enum:['reader','admin'],default:'reader'},
})

const User = mongoose.model('User',userSchema);
export default User;