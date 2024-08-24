import mongoose  from 'mongoose';

const userSchema = mongoose.Schema({
   name : String ,
   password :String,

},{timestamps:true})
const userCollection = mongoose.model('User',userSchema)

export default userCollection;