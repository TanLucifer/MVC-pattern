import mongoose from "mongoose";

export const mongoConn = (url)=>{
    mongoose.connect(`${url}/Database`).then(()=>{
       console.log("Connected to Database");
    }).catch((e)=>{
  console.log("Error connecting to Database",e.message);
    });
}