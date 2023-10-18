const mongoose= require('mongoose');
const {Schema}= mongoose;
const userSchema= new Schema({
    name:String,
    password:String,
    username:{
        type:String,
        unique:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const userModel= mongoose.model('user',userSchema);
module.exports=userModel;