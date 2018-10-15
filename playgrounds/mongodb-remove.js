var {ObjectID} = require('mongodb');
var {mongoose} = require('./../server/db/mongoose');
var {todo} = require('./../server/models/todos');
var {Users} = require("../server/models/user");

// todo.remove({}).then((result)=>{
//     console.log(result);
// });

todo.findByIdAndRemove('5bc4b206b52d0e382ef321fb').then((todo)=>{
    console.log(todo); 
});