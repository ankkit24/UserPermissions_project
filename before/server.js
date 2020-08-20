const express = require('express') //express server
const app = express()
const { users } = require('./data')
const projectRouter = require('./routes/projects')

app.use(express.json()) //telling the server to pull in data from an api to a json object
app.use(setUser)
app.use('/projects', projectRouter) // all the project routes are here

//these are the get requests for the respective routes
app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/dashboard', (req, res) => {
  res.send('Dashboard Page')
})

app.get('/admin', (req, res) => {
  res.send('Admin Page')
})

//setting the user with a user id
function setUser(req, res, next) {
  const userId = req.body.userId
  if (userId) {
    req.user = users.find(user => user.id === userId)
  }
  next()
}
//app listens on this port
app.listen(3000)