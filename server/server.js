const express = require('express');
var bodyParser = require('body-parser');

var {mongoose}=require('./db/mongoose');
var {todo}=require('./models/todos');
var {Users}=require('./models/user');

var app = express();
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
    var Todo = new todo({
        text:req.body.text
    });
    Todo.save().then((doc)=>{
        res.send(doc);
    },(err)=>{
        res.status(400).send(err);
    })
});

app.get('/todos',(req,res )=>{
    todo.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
        res.send(e).status(400);
    });
});

app.listen(3000,()=>{
    console.log("Started on port :3000");
})