const Repository = require("../db/repository");
const Controller = {
  Get: (req, res) => {
    Repository.FindAll()
      .then((result) => {
        res.json({
          data: result,
        });
      })
      .catch((err) => {
        res.json({
          error: err,
        });
      });
  },
  GetOne: (req, res) => {
    Repository.FindOne(req.params.id)
      .then((result) => {
        res.json({
          data: result,
        });
      })
      .catch((err) => {
        res.json({
          error: err,
        });
      });
  },
  Post: (req, res) => {
    const body = req.body;
    Repository.InsertOne(body)
      .then((result) => {
        res.json({
          message: "User added.",
        });
      })
      .catch((err) => {
        res.json({
          error: err,
        });
      });
  },
  Put: (req, res) => {
     const updated = req.body;
     Repository.UpdateOne(req.params.id, updated)
       .then((result) => {
         res.json({
           message: "User Updated.",
         });
       })
       .catch((err) => {
         res.json({
           error: err,
         });
       });
  },
  Delete: (req, res) => {
      Repository.DeleteOne(req.params.id)
        .then((result) => {
          res.json({
           message:'User Deleted.'
          });
        })
        .catch((err) => {
          res.json({
            error: err,
          });
        });
  },
};
module.exports = Controller;
