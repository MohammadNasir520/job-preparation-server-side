const express= require('express');
const app= express();
port = process.env.PORT || 5000;

const cors =require("cors");

app.use(cors())

const courses= require('./data/data.json')

const checkout=require('./data/data.json')



app.get('/', (req, res) => {
    res.send('api running')
  })
  
app.get('/courses', (req, res) => {
    res.send(courses)
  })
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(course=>course.id==id)

    if (!course){
      res.send("not found")
    }
    res.send(course)
  })


  app.get('/checkout', (req, res) => {
    res.send(checkout)
  })

  app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(course=>course.id==id)

    if (!course){
      res.send("not found")
    }
    res.send(course)
  })

  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })