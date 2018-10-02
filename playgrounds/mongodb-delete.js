const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log("Unable to connect to MongoDB server ");
    }
    console.log("Connected to MongoDB Server");

    //deleteMany
    db.collection('Todos').deleteMany({
        text:"Eat Lunch"
    }).then((result)=>{
        console.log(result);
    });

    //deleteOne
    db.collection('Todos').deleteOne({
        text:"Eat lunch"
    }).then((result)=>{
        console.log(result);
    });

    //findoneanddelete
    db.collection('Todos').findOneAndDelete({
        completed:false
    }).then((result)=>{
        console.log(result);
    });

    //challenge
    db.collection('User').deleteMany({
        name:"Saurav"
    }).then((result)=>{
        console.log(result);
    });

    db.collection('User').findOneAndDelete({
        _id:new ObjectID("5bb39cb1f202b06f3a99f915")
    }).then((result)=>{
        console.log(result);
    });
    // db.close();
})
