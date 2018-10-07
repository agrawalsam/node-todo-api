var {ObjectID} = require('mongodb');


var {mongoose} = require('./../server/db/mongoose');
// var {todo} = require('./../server/models/todos');
var {Users} = require("../server/models/user");

var id = '5bb465663612e7687aaa1bc6';
// var id ='5bb8fc486671d601b097e0bf';
// if(!ObjectID.isValid(id)){
//     console.log("User ID is invalid")
// }
// todo.find({
//     _id:id
// }).then((todos)=>{
//     console.log('TOdo :',todos);
// });

// todo.findOne({
//     _id:id
// }).then((todos)=>{
//     console.log('todo :',todos);
// });

// todo.findById(id).then((todos)=>{
//     if(!todos){
//         return console.log("Id not found");
//     }
//     console.log('todo :',todos);
// }).catch((e)=> console.log(e));

Users.findById(id).then((users)=>{
    if(!users){
        return console.log("ID not found");
    }
    console.log("User is found:",users);
}).catch((e)=>{
    console.log(e);
});