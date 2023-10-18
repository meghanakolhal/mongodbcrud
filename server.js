const app= require('./index');
const port= process.env.PORT|| 8090;
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://meghanakolhalnagappa:meghanakolhal@cluster0.fffhj3o.mongodb.net/digikull?retryWrites=true&w=majority"
  )
  .then((data) => {
    console.log("mongoose connected");
    app.listen(port, () => {
      console.log(`the server is listenenign on ${port}`);
    });
  })
  .catch((err) => console.log(err));

