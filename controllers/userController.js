import userCollection from "../models/userModel.js";

export const signupControlller= async(req,res)=>{
   try {
    const {name,password} = req.body;
    const user = await userCollection.create({
        name,
        password,
    })
    console.log(req.body)
    console.log(user);
    res.status(201).json({message:"User created successfully",user})
   } catch (error) {
     res.status(500).json({message:"Error"});
     console.error("Error in signupControlller",error.message);
   }
}