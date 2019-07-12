const express = require("express");
const router = express.Router();
const actiondb = require('../data/helpers/actionModel');
const projectsdb = require('../data/helpers/projectModel');


router.get('/', (req, res) =>{
    projectsdb.get()
    .then(projects => {
        res.status(200).json(projects)
    }).catch(error => {
        res.status(500).json({error, message: "Unable to get the projects"})
    })
})

module.exports = router;