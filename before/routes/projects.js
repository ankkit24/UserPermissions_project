const express = require('express')
const router = express.Router()
const { projects } = require('../data')

//get route for all of the projects
router.get('/', (req, res) => {
  res.json(projects)
})

//get route for a particular project with an id
router.get('/:projectId', setProject, (req, res) => {
  res.json(req.project)
})

//setting the project
function setProject(req, res, next) {
  const projectId = parseInt(req.params.projectId)
  req.project = projects.find(project => project.id === projectId)
  
  if (req.project == null) {
    res.status(404)
    return res.send('Project not found')
  }
  next()
}

module.exports = router