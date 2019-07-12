const express = require("express");
const router = express.Router();
const projectsdb = require("../data/helpers/projectModel");
const actionsdb = require("../data/helpers/actionModel");



router.get("/", (req, res) => {
    actionsdb.get()
      .then(actions => {
        res.status(200).json(actions);
      })
      .catch(err => {
        res.status(500).json({ error: "Unable to retrieve actions" });
      });
  });


// Costum Middleware


  function validateActionId(req, res, next) {
    const id = req.params.id;
    actionsdb
      .get(id).then(action => {
        if (action) {
          req.action = action;
          next();
        } else {
          res.status(400).json({ message: "Invalid Action ID" });
        }
      })
      .catch(error => {
        res
          .status(500)
          .json({ message: "error in the validation by id function" });
      });
  }
  
  function validateProjectId(req, res, next) {
    const id = req.params.id;
    projectsdb.get(id)
      .then(project => {
        if (project) {
          req.project = project;
          next();
        } else {
          res.status(400).json({ message: "Invalid Project ID" });
        }
      })
      .catch(error => {
        res
          .status(500)
          .json({ message: "error in the validation by id function" });
      });
  }






module.exports = router;