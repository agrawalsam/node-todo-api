const _ = require('lodash');
const express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose}=require('./db/mongoose');
var {todo}=require('./models/todos');
var {Users}=require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

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

app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    todo.findById(id).then((todos)=>{
        if(!todos){
            return res.status(400).send();
        }
        res.send({todos});
    },(e)=>{
        res.status(400).send();
    });
});

app.patch('/todos/:id',(req,res)=>{
    var id = req.params.id;
    var body = _.pick(req.body,['text','completed']);

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    
    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    } else{
        body.completed = false;
        body.completedAt = null;
    }

    todo.findByIdAndUpdate(id, {$set: body}, {new:true}).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e)=>{
        res.status(400).send();
    })
})

app.delete('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    todo.findByIdAndRemove(id).then((todos)=>{
        if(!todos){
            return res.status(404).send();
        }
        res.send({todos});
    },(e)=>{
        res.status(400).send();
    })
})
app.listen(port,()=>{
    console.log(`Started on port ${port}`);
});