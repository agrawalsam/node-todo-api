const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log("Unable to connect to MongoDB server ");
    }
    console.log("Connected to MongoDB Server");

    // db.collection('Todos').findOneAndUpdate({
    //     _id:new ObjectID("5bb3a702bc04ec7456abe0d5")
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('User').findOneAndUpdate({
        _id:new ObjectID("5bb39cbd27ea9c6f4d7c8c38")
    },{
        $set:{
            name:"Saurav"
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    })

    // db.close();
})
