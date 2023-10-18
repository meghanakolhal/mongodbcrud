const User= require('./User');
const Repository = {
  FindAll: () => {
    return User.find();
  },
  InsertOne: (body)=>{
 const user= new User(body);
 return user.save();

  },
  FindOne:(id)=>{
    return User.findOne({_id:id})
  },
  UpdateOne:(id,updated)=>{
    return User.updateOne({_id:id},{$set:updated})
  },
  DeleteOne:(id)=>{
    return User.deleteOne({_id:id})
  }
};
module.exports=Repository;