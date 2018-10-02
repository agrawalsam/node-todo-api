const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log("Unable to connect to MongoDB server ");
    }
    console.log("Connected to MongoDB Server");

    // db.collection("Todos").find().count().then((value)=>{
    //     console.log(`Todos count: ${value}`);
    // },(err)=>{
    //     if(err){
    //         return  console.log("There is error",err);
    //     }
    // });
    db.collection("User").find({
        name:"Saurav"
    }).count().then((value)=>{
        console.log(`Saurav count: ${value}`);
    },(err)=>{
        if(err){
            return  console.log("There is error",err);
        }
    });
    // db.close();
})
