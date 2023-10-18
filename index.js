const express= require('express');
const app= express();
const port = process.env.PORT || 3000;
const mongodbRouter= require('./routes/mongodbcrud');
const mongoose = require("mongoose");
app.use(express.json());
app.use('/',mongodbRouter);
mongoose
  .connect(
    "mongodb+srv://meghanakolhalnagappa:meghanakolhal@cluster0.fffhj3o.mongodb.net/digikull?retryWrites=true&w=majority"
  )
  .then((data) => {
    console.log("mongoose connected");
    app.listen(port, () => {
      console.log(`the server started listening on ${port}`);
    });
  })
  .catch((err) => console.log(err));






module.exports=app;